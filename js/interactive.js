/* ==========================================================================
   PONDER CLUB | Interactive Stationery Experiences
   Tactile simulators for Shape Shift Memo, Think Layer, Blur Log & Progress Sheet
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initManifestoDepthMeter();
  initProductSliders();
});

/* --------------------------------------------------------------------------
   0. Thought Depth Meter (Manifesto Section)
   -------------------------------------------------------------------------- */
function initManifestoDepthMeter() {
  const slider = document.getElementById('manifestoDepthSlider');
  const status = document.getElementById('thoughtDepthStatus');
  if (!slider || !status) return;

  const depthStates = [
    { max: 20, text: 'レベル1: 思考の入り口「日常の違和感を拾う」' },
    { max: 40, text: 'レベル2: 拡散「問いをノートに散らかす」' },
    { max: 65, text: 'レベル3: 構造化「関係性をつなぎ、疑う」' },
    { max: 85, text: 'レベル4: 深掘り「本質に潜り込み、沈黙する」' },
    { max: 100, text: 'レベル5: 熟考の極地「考え抜いた果ての肯定」' }
  ];

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    const found = depthStates.find(item => val <= item.max) || depthStates[depthStates.length - 1];
    status.textContent = found.text;
  });
}

/* --------------------------------------------------------------------------
   1. Shape Shift Memo: Carving Simulator Canvas
   -------------------------------------------------------------------------- */
function initShapeShiftMemoCanvas() {
  const canvas = document.getElementById('shapeMemoCanvas');
  const carvedMeter = document.getElementById('memoCarvedPercent');
  const resetBtn = document.getElementById('resetMemoBtn');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let carvedPixels = 0;
  let totalPixels = 0;

  function resizeAndDraw() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 200;
    totalPixels = canvas.width * canvas.height;
    drawPaperBlock();
  }

  function drawPaperBlock() {
    // Background surface
    ctx.fillStyle = '#E8E5DF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial pristine faceted block
    ctx.fillStyle = '#FAF9F6';
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.25, 30);
    ctx.lineTo(canvas.width * 0.75, 30);
    ctx.lineTo(canvas.width * 0.85, 170);
    ctx.lineTo(canvas.width * 0.15, 170);
    ctx.closePath();
    ctx.fill();

    // Subtle paper edge lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 1;
    for (let y = 35; y < 165; y += 4) {
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.18, y);
      ctx.lineTo(canvas.width * 0.82, y);
      ctx.stroke();
    }

    carvedPixels = 0;
    if (carvedMeter) carvedMeter.textContent = '0%';
  }

  window.addEventListener('resize', resizeAndDraw);
  resizeAndDraw();

  function carve(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    // Use destination-out to carve through the paper layers, revealing deep paper color
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    carvedPixels += 30;
    const percent = Math.min(100, Math.round((carvedPixels / (canvas.width * 0.5)) * 100));
    if (carvedMeter) carvedMeter.textContent = `${percent}% (思考の削り出し)`;
  }

  canvas.addEventListener('mousedown', (e) => { isDrawing = true; carve(e); });
  window.addEventListener('mouseup', () => { isDrawing = false; });
  canvas.addEventListener('mousemove', carve);

  // Touch support
  canvas.addEventListener('touchstart', (e) => { isDrawing = true; carve(e); }, { passive: true });
  window.addEventListener('touchend', () => { isDrawing = false; });
  canvas.addEventListener('touchmove', carve, { passive: true });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      drawPaperBlock();
    });
  }
}

/* --------------------------------------------------------------------------
   2. Think Layer: Contour Ring Depth Slider
   -------------------------------------------------------------------------- */
function initThinkLayerSlider() {
  const slider = document.getElementById('thinkLayerDepthSlider');
  const label = document.getElementById('thinkLayerDepthValue');
  const rings = document.querySelectorAll('.contour-ring');
  const core = document.querySelector('.contour-core');
  if (!slider) return;

  slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    if (label) label.textContent = `Layer 0${val} / 10`;

    // Dynamically expand rings and intensify orange core
    rings.forEach((ring, idx) => {
      const ringDepth = idx + 1;
      const scale = 1 + (val * 0.08 * (idx + 1));
      const opacity = ringDepth <= val ? 0.85 : 0.18;
      ring.style.transform = `scale(${scale})`;
      ring.style.opacity = opacity;
    });

    if (core) {
      const coreScale = 0.8 + (val * 0.09);
      core.style.transform = `scale(${coreScale})`;
      core.style.boxShadow = `0 0 ${val * 4}px rgba(255, 85, 17, 0.6)`;
    }
  });
}

/* --------------------------------------------------------------------------
   3. Blur Log: Japanese Sand Tray Drawing Canvas
   -------------------------------------------------------------------------- */
function initBlurLogCanvas() {
  const canvas = document.getElementById('blurLogCanvas');
  const resetBtn = document.getElementById('resetSandBtn');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let lastX = 0, lastY = 0;

  function initSandSurface() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 200;

    // Dark sleek aluminum tray background
    ctx.fillStyle = '#18181A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Fine white sand texture
    ctx.fillStyle = '#ECE7DF';
    ctx.fillRect(8, 8, canvas.width - 16, canvas.height - 16);

    // Subtle pre-drawn meditative ripples
    ctx.strokeStyle = '#D5CEC2';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    for (let r = 20; r < 70; r += 14) {
      ctx.beginPath();
      ctx.arc(canvas.width * 0.5, canvas.height * 0.5, r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  window.addEventListener('resize', initSandSurface);
  initSandSurface();

  function drawRake(x, y) {
    ctx.strokeStyle = '#C2B9A9';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Shadow groove
    ctx.strokeStyle = '#998E7E';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY + 1.5);
    ctx.lineTo(x, y + 1.5);
    ctx.stroke();

    lastX = x;
    lastY = y;
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
  });

  window.addEventListener('mouseup', () => { isDrawing = false; });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawRake(x, y);
  });

  // Touch
  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.touches[0].clientX - rect.left;
    lastY = e.touches[0].clientY - rect.top;
  }, { passive: true });

  window.addEventListener('touchend', () => { isDrawing = false; });

  canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    drawRake(x, y);
  }, { passive: true });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      initSandSurface();
    });
  }
}

/* --------------------------------------------------------------------------
   4. Task Progress Sheet: Interactive Checklist
   -------------------------------------------------------------------------- */
function initTaskProgressDemo() {
  const rows = document.querySelectorAll('.task-demo-row');
  const countBadge = document.getElementById('taskCompletedRatio');

  function updateCount() {
    const total = rows.length;
    const checked = document.querySelectorAll('.task-demo-row.checked').length;
    if (countBadge) {
      countBadge.textContent = `${checked} / ${total} 完了 (${Math.round((checked / total) * 100)}%)`;
    }
  }

  rows.forEach(row => {
    row.addEventListener('click', () => {
      row.classList.toggle('checked');
      const box = row.querySelector('.task-checkbox-custom');
      if (box) {
        box.textContent = row.classList.contains('checked') ? '✓' : '';
      }
      updateCount();
    });
  });

  updateCount();
}

/* --------------------------------------------------------------------------
   Product Photo Sliders (4-Photo Interactive Carousel)
   -------------------------------------------------------------------------- */
function initProductSliders() {
  const sliders = document.querySelectorAll('.product-slider');
  sliders.forEach(slider => {
    const viewport = slider.querySelector('.slider-viewport');
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slider-slide');
    const prevBtn = slider.querySelector('.slider-nav-btn.prev');
    const nextBtn = slider.querySelector('.slider-nav-btn.next');
    const counterCurrent = slider.querySelector('.slider-counter-current');
    const thumbs = slider.querySelectorAll('.slider-thumb');
    const total = slides.length;
    if (!track || total === 0) return;

    let currentIndex = 0;

    function goToSlide(index) {
      currentIndex = (index + total) % total;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (counterCurrent) {
        counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
      }
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex + 1);
      });
    }

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          goToSlide(idx);
        }
      });
    });

    // Touch swipe support
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    if (viewport) {
      viewport.addEventListener('touchstart', (e) => {
        if (!e.touches || e.touches.length === 0) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwiping = true;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        if (!isSwiping || !e.changedTouches || e.changedTouches.length === 0) return;
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;
        isSwiping = false;

        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            goToSlide(currentIndex + 1); // Swipe left -> Next
          } else {
            goToSlide(currentIndex - 1); // Swipe right -> Prev
          }
        }
      }, { passive: true });

      // Keyboard navigation when focused
      viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToSlide(currentIndex + 1);
        }
      });
    }
  });
}

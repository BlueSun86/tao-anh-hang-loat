
    lucide.createIcons();

    // Default template coordinates based on HannahOlala x Decorté Sample Image (1024 x 1024)
    const DEFAULT_LAYOUT = {
      // Main Product
      mainProdImg: { label: "Ảnh Sản phẩm chính", type: "image", x: 165, y: 285, w: 165, h: 400, visible: true },
      mainProdName: { label: "Tên Sản phẩm chính", type: "text", x: 512, y: 215, w: 700, h: 60, fontSize: 32, fontWeight: "800", color: "#111827", align: "center", maxLines: 2, visible: true },
      mainProdSpec: { label: "Quy cách SP chính", type: "text", x: 250, y: 745, w: 120, h: 30, fontSize: 20, fontWeight: "800", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

      // Total Gift Price Banner
      giftTotalBanner: { label: "Tổng giá trị quà", type: "text", x: 635, y: 418, w: 230, h: 40, fontSize: 34, fontWeight: "900", color: "#6D28D9", align: "center", maxLines: 1, visible: true },
      
      // Default Gift Placeholders
      gift1Img: { label: "Ảnh Quà 1", type: "image", x: 535, y: 605, w: 110, h: 225, visible: true },
      gift1Name: { label: "Tên Quà 1", type: "text", x: 590, y: 566, w: 160, h: 30, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
      gift1Spec: { label: "Quy cách Quà 1", type: "text", x: 590, y: 585, w: 160, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },
      gift2Img: { label: "Ảnh Quà 2", type: "image", x: 675, y: 715, w: 125, h: 115, visible: true },
      gift2Name: { label: "Tên Quà 2", type: "text", x: 738, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
      gift2Spec: { label: "Quy cách Quà 2", type: "text", x: 738, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },
      gift3Img: { label: "Ảnh Quà 3", type: "image", x: 820, y: 715, w: 125, h: 115, visible: true },
      gift3Name: { label: "Tên Quà 3", type: "text", x: 882, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
      gift3Spec: { label: "Quy cách Quà 3", type: "text", x: 882, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true }
    };

    // Presets based on number of gifts
    const GIFT_PRESETS = {
      3: {
        gift1Img: { label: "Ảnh Quà 1", type: "image", x: 535, y: 605, w: 110, h: 225, visible: true },
        gift1Name: { label: "Tên Quà 1", type: "text", x: 590, y: 566, w: 160, h: 30, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift1Spec: { label: "Quy cách Quà 1", type: "text", x: 590, y: 585, w: 160, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

        gift2Img: { label: "Ảnh Quà 2", type: "image", x: 675, y: 715, w: 125, h: 115, visible: true },
        gift2Name: { label: "Tên Quà 2", type: "text", x: 738, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift2Spec: { label: "Quy cách Quà 2", type: "text", x: 738, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

        gift3Img: { label: "Ảnh Quà 3", type: "image", x: 820, y: 715, w: 125, h: 115, visible: true },
        gift3Name: { label: "Tên Quà 3", type: "text", x: 882, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift3Spec: { label: "Quy cách Quà 3", type: "text", x: 882, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },
      },
      2: {
        gift1Img: { label: "Ảnh Quà 1", type: "image", x: 575, y: 615, w: 145, h: 215, visible: true },
        gift1Name: { label: "Tên Quà 1", type: "text", x: 647, y: 575, w: 180, h: 30, fontSize: 14, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift1Spec: { label: "Quy cách Quà 1", type: "text", x: 647, y: 595, w: 180, h: 20, fontSize: 14, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

        gift2Img: { label: "Ảnh Quà 2", type: "image", x: 755, y: 695, w: 145, h: 135, visible: true },
        gift2Name: { label: "Tên Quà 2", type: "text", x: 827, y: 660, w: 180, h: 20, fontSize: 14, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift2Spec: { label: "Quy cách Quà 2", type: "text", x: 827, y: 680, w: 180, h: 20, fontSize: 14, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

        gift3Img: { label: "Ảnh Quà 3", type: "image", x: 820, y: 715, w: 125, h: 115, visible: false },
        gift3Name: { label: "Tên Quà 3", type: "text", x: 882, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: false },
        gift3Spec: { label: "Quy cách Quà 3", type: "text", x: 882, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: false },
      },
      1: {
        gift1Img: { label: "Ảnh Quà 1", type: "image", x: 670, y: 600, w: 170, h: 230, visible: true },
        gift1Name: { label: "Tên Quà 1", type: "text", x: 755, y: 555, w: 220, h: 30, fontSize: 15, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: true },
        gift1Spec: { label: "Quy cách Quà 1", type: "text", x: 755, y: 578, w: 220, h: 20, fontSize: 15, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: true },

        gift2Img: { label: "Ảnh Quà 2", type: "image", x: 675, y: 715, w: 125, h: 115, visible: false },
        gift2Name: { label: "Tên Quà 2", type: "text", x: 738, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: false },
        gift2Spec: { label: "Quy cách Quà 2", type: "text", x: 738, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: false },

        gift3Img: { label: "Ảnh Quà 3", type: "image", x: 820, y: 715, w: 125, h: 115, visible: false },
        gift3Name: { label: "Tên Quà 3", type: "text", x: 882, y: 682, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 2, visible: false },
        gift3Spec: { label: "Quy cách Quà 3", type: "text", x: 882, y: 701, w: 140, h: 20, fontSize: 13, fontWeight: "700", color: "#7C3AED", align: "center", maxLines: 1, visible: false },
      }
    };

    let layout = JSON.parse(JSON.stringify(DEFAULT_LAYOUT));
    let bgImage = new Image();
    if (typeof DEFAULT_BG_B64 !== 'undefined' && DEFAULT_BG_B64) {
      bgImage.src = DEFAULT_BG_B64;
    } else {
      bgImage.src = 'sample_template.jpg';
    }

    let excelRows = [];
    let imageMap = new Map();
    let imageCache = new Map();
    let currentIndex = 0;
    let selectedKey = 'mainProdImg';

    // Dragging state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragItemStartX = 0;
    let dragItemStartY = 0;

    // DOM Elements
    const previewCanvas = document.getElementById('previewCanvas');
    const ctx = previewCanvas.getContext('2d');
    const selectedLayer = document.getElementById('selectedLayer');
    const propX = document.getElementById('propX');
    const propY = document.getElementById('propY');
    const propW = document.getElementById('propW');
    const propH = document.getElementById('propH');
    const propFontSize = document.getElementById('propFontSize');
    const propColor = document.getElementById('propColor');
    const propAlign = document.getElementById('propAlign');
    const propVisible = document.getElementById('propVisible');
    const typographyProps = document.getElementById('typographyProps');
    const bgInput = document.getElementById('bgInput');
    const excelInput = document.getElementById('excelInput');
    const folderInput = document.getElementById('folderInput');
    const filesInput = document.getElementById('filesInput');
    const prevRowBtn = document.getElementById('prevRowBtn');
    const nextRowBtn = document.getElementById('nextRowBtn');
    const currentRowIndex = document.getElementById('currentRowIndex');
    const downloadCurrentBtn = document.getElementById('downloadCurrentBtn');
    const batchExportBtn = document.getElementById('batchExportBtn');
    const saveConfigBtn = document.getElementById('saveConfigBtn');
    const loadConfigInput = document.getElementById('loadConfigInput');
    const resetLayoutBtn = document.getElementById('resetLayoutBtn');
    const useDemoDataBtn = document.getElementById('useDemoDataBtn');
    const downloadSampleExcelBtn = document.getElementById('downloadSampleExcelBtn');

    // Load background image
    bgImage.onload = () => {
      // Sync canvas dimensions to background template
      if (bgImage.width > 0 && bgImage.height > 0) {
        previewCanvas.width = bgImage.width;
        previewCanvas.height = bgImage.height;
      }
      renderCanvas();
    };

    bgInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        bgImage = new Image();
        bgImage.onload = () => {
          previewCanvas.width = bgImage.width;
          previewCanvas.height = bgImage.height;
          document.getElementById('bgStatusBadge').textContent = 'Ảnh nền tùy chỉnh';
          renderCanvas();
        };
        bgImage.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });

    // Populate inspector
    function updateInspector() {
      const item = layout[selectedKey];
      if (!item) return;

      propX.value = Math.round(item.x);
      propY.value = Math.round(item.y);
      propW.value = Math.round(item.w);
      propH.value = Math.round(item.h);
      propVisible.checked = item.visible !== false;

      if (item.type === 'text') {
        typographyProps.classList.remove('hidden');
        propFontSize.value = item.fontSize || 20;
        propColor.value = item.color || '#000000';
        propAlign.value = item.align || 'center';
      } else {
        typographyProps.classList.add('hidden');
      }
    }

    selectedLayer.addEventListener('change', () => {
      selectedKey = selectedLayer.value;
      updateInspector();
      renderCanvas();
    });

    [propX, propY, propW, propH, propFontSize, propColor, propAlign, propVisible].forEach(el => {
      el.addEventListener('input', () => {
        const item = layout[selectedKey];
        if (!item) return;
        item.x = parseFloat(propX.value) || 0;
        item.y = parseFloat(propY.value) || 0;
        item.w = parseFloat(propW.value) || 0;
        item.h = parseFloat(propH.value) || 0;
        item.visible = propVisible.checked;
        if (item.type === 'text') {
          item.fontSize = parseFloat(propFontSize.value) || 16;
          item.color = propColor.value;
          item.align = propAlign.value;
        }
        renderCanvas();
      });
    });

    // Preset button event listeners
    function updatePresetButtonsUI(count) {
      const b1 = document.getElementById('btnLayout1Gift');
      const b2 = document.getElementById('btnLayout2Gift');
      const b3 = document.getElementById('btnLayout3Gift');
      [b1, b2, b3].forEach(b => {
        b.className = 'py-1 px-2 text-[11px] font-semibold bg-white hover:bg-purple-100 text-slate-700 border border-slate-200 rounded transition text-center';
      });
      if (count === 1) b1.className = 'py-1 px-2 text-[11px] font-semibold bg-purple-600 text-white rounded transition text-center';
      if (count === 2) b2.className = 'py-1 px-2 text-[11px] font-semibold bg-purple-600 text-white rounded transition text-center';
      if (count === 3) b3.className = 'py-1 px-2 text-[11px] font-semibold bg-purple-600 text-white rounded transition text-center';
    }

    function applyGiftPreset(count) {
      if (GIFT_PRESETS[count]) {
        Object.assign(layout, JSON.parse(JSON.stringify(GIFT_PRESETS[count])));
        updatePresetButtonsUI(count);
        updateInspector();
        renderCanvas();
      }
    }

    document.getElementById('btnLayout1Gift').addEventListener('click', () => {
      document.getElementById('autoAdaptGifts').checked = false;
      applyGiftPreset(1);
    });
    document.getElementById('btnLayout2Gift').addEventListener('click', () => {
      document.getElementById('autoAdaptGifts').checked = false;
      applyGiftPreset(2);
    });
    document.getElementById('btnLayout3Gift').addEventListener('click', () => {
      document.getElementById('autoAdaptGifts').checked = false;
      applyGiftPreset(3);
    });

    resetLayoutBtn.addEventListener('click', () => {
      if (confirm('Khôi phục lại toàn bộ tọa độ về thiết lập mẫu ban đầu?')) {
        layout = JSON.parse(JSON.stringify(DEFAULT_LAYOUT));
        updateInspector();
        renderCanvas();
      }
    });

    // Save & Load Layout JSON
    saveConfigBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(layout, null, 2)], { type: 'application/json' });
      saveAs(blob, `layout_config_${new Date().toISOString().slice(0, 10)}.json`);
    });

    loadConfigInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          layout = JSON.parse(evt.target.result);
          updateInspector();
          renderCanvas();
          alert('Đã nạp file cấu hình Layout thành công!');
        } catch (err) {
          alert('File cấu hình JSON không hợp lệ!');
        }
      };
      reader.readAsText(file);
    });

    // Excel Parser
    excelInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const excelLabel = document.getElementById('excelFileNameLabel');
      if (excelLabel) excelLabel.textContent = `Đã chọn: ${file.name}`;

      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          if (typeof XLSX === 'undefined') {
            alert('Lỗi: Thư viện XLSX chưa được tải! Vui lòng tải lại trang.');
            return;
          }
          const data = new Uint8Array(evt.target.result);
          const wb = XLSX.read(data, { type: 'array' });
          if (!wb.SheetNames || wb.SheetNames.length === 0) {
            alert('File Excel không có sheet nào!');
            return;
          }

          // Search for sheet with actual rows
          let selectedSheet = null;
          let sheetData = [];
          for (const sName of wb.SheetNames) {
            const raw = XLSX.utils.sheet_to_json(wb.Sheets[sName], { header: 1, defval: '' });
            if (raw && raw.length > 1) {
              selectedSheet = wb.Sheets[sName];
              sheetData = raw;
              break;
            }
          }

          if (!selectedSheet && wb.SheetNames.length > 0) {
            selectedSheet = wb.Sheets[wb.SheetNames[0]];
            sheetData = XLSX.utils.sheet_to_json(selectedSheet, { header: 1, defval: '' });
          }

          if (!sheetData || sheetData.length < 2) {
            alert('File Excel của bạn chưa có dữ liệu hoặc chỉ có dòng tiêu đề!');
            return;
          }

          // Find the actual header row (row that contains 'Tên sản phẩm' or 'SKU')
          let headerRowIndex = 0;
          for (let r = 0; r < Math.min(20, sheetData.length); r++) {
            const rowText = (sheetData[r] || []).map(c => String(c || '').toLowerCase()).join(' ');
            if (rowText.includes('tên sản phẩm') || rowText.includes('sku sản phẩm') || rowText.includes('sku')) {
              headerRowIndex = r;
              break;
            }
          }

          const rawHeaders = sheetData[headerRowIndex].map(h => String(h || '').trim());
          const rows = [];
          let currentProduct = null;

          for (let r = headerRowIndex + 1; r < sheetData.length; r++) {
            const rowArr = sheetData[r];
            if (!rowArr || !rowArr.some(cell => String(cell || '').trim() !== '')) continue;

            const rowObj = {};
            rawHeaders.forEach((h, cIdx) => {
              if (h) rowObj[h] = rowArr[cIdx] !== undefined ? rowArr[cIdx] : '';
            });

            // Check if this row is a new product header row in multi-section tables
            const rowStr = Object.values(rowObj).join(' ').toLowerCase();
            if (rowStr.includes('thời gian trả ảnh') || rowStr.includes('tên thương hiệu') || rowStr.includes('shop name') || rowStr.includes('mã sản phẩm,tên sản phẩm')) {
              continue;
            }

            // Check if this row is a new product (has SKU or Product Name)
            const skuVal = String(rowObj['SKU sản phẩm'] || rowObj['SKU SP'] || rowObj['SKU'] || rowObj['Mã sản phẩm'] || '').trim();
            const nameVal = String(rowObj['Tên sản phẩm'] || rowObj['Tên SP'] || '').trim();

            if (skuVal || nameVal) {
              currentProduct = rowObj;
              rows.push(currentProduct);
            } else if (currentProduct) {
              // This row is an additional gift item belonging to currentProduct!
              const extraGiftName = String(rowObj['Tên quà tặng + khối lượng'] || rowObj['Quà tặng kèm (nếu có)'] || rowObj['Tên quà 1'] || '').trim();
              const extraGiftSku = String(rowObj['SKU quà tặng'] || rowObj['SKU QUÀ'] || rowObj['Ảnh quà 1'] || '').trim();

              if (extraGiftName) {
                const existingGifts = currentProduct['Tên quà tặng + khối lượng'] || currentProduct['Quà tặng kèm (nếu có)'] || '';
                currentProduct['Tên quà tặng + khối lượng'] = existingGifts ? `${existingGifts}\n${extraGiftName}` : extraGiftName;
              }
              if (extraGiftSku) {
                const existingSkus = currentProduct['SKU quà tặng'] || currentProduct['SKU QUÀ'] || '';
                currentProduct['SKU quà tặng'] = existingSkus ? `${existingSkus}\n${extraGiftSku}` : extraGiftSku;
              }
            }
          }

          if (rows.length > 0) {
            excelRows = rows;
            currentIndex = 0;
            updateDataTable();
            renderCanvas();
            alert(`🎉 NẠP THÀNH CÔNG ${excelRows.length} SẢN PHẨM!\nBảng dữ liệu bên dưới đã được cập nhật.`);
          } else {
            alert('Không tìm thấy dòng dữ liệu sản phẩm nào trong file Excel!');
          }
        } catch (err) {
          alert('Lỗi khi đọc file Excel: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    });

    // Helper: Parse Tab-separated or Comma-separated text from Excel clipboard
    function parseExcelText(rawText) {
      if (!rawText || !rawText.trim()) return [];
      const lines = rawText.trim().split(/\r?\n/);
      if (lines.length < 2) return [];

      const delimiter = lines[0].includes('\t') ? '\t' : ',';
      
      // Parse CSV lines respecting quotes
      function parseLine(line) {
        if (delimiter === '\t') return line.split('\t').map(c => c.trim().replace(/^"|"$/g, ''));
        const result = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') inQuotes = !inQuotes;
          else if (char === ',' && !inQuotes) {
            result.push(cur.trim().replace(/^"|"$/g, ''));
            cur = '';
          } else {
            cur += char;
          }
        }
        result.push(cur.trim().replace(/^"|"$/g, ''));
        return result;
      }

      // Find header index
      let headerIdx = 0;
      for (let i = 0; i < Math.min(20, lines.length); i++) {
        const l = lines[i].toLowerCase();
        if (l.includes('tên sản phẩm') || l.includes('sku')) {
          headerIdx = i;
          break;
        }
      }

      const headers = parseLine(lines[headerIdx]);
      const rows = [];
      let currentProd = null;

      for (let i = headerIdx + 1; i < lines.length; i++) {
        const cols = parseLine(lines[i]);
        if (!cols || !cols.some(c => c)) continue;

        const rowObj = {};
        headers.forEach((h, idx) => {
          if (h) rowObj[h] = cols[idx] !== undefined ? cols[idx] : '';
        });

        const rowStr = Object.values(rowObj).join(' ').toLowerCase();
        if (rowStr.includes('thời gian trả ảnh') || rowStr.includes('tên thương hiệu') || rowStr.includes('shop name')) continue;

        const skuVal = String(rowObj['SKU sản phẩm'] || rowObj['SKU SP'] || rowObj['SKU'] || rowObj['Mã sản phẩm'] || '').trim();
        const nameVal = String(rowObj['Tên sản phẩm'] || rowObj['Tên SP'] || '').trim();

        if (skuVal || nameVal) {
          currentProd = rowObj;
          rows.push(currentProd);
        } else if (currentProd) {
          const extraGift = String(rowObj['Tên quà tặng + khối lượng'] || rowObj['Quà tặng kèm (nếu có)'] || '').trim();
          const extraSku = String(rowObj['SKU quà tặng'] || rowObj['SKU QUÀ'] || '').trim();
          if (extraGift) {
            currentProd['Tên quà tặng + khối lượng'] = (currentProd['Tên quà tặng + khối lượng'] || '') + '\n' + extraGift;
          }
          if (extraSku) {
            currentProd['SKU quà tặng'] = (currentProd['SKU quà tặng'] || '') + '\n' + extraSku;
          }
        }
      }
      return rows;
    }

    // Apply Pasted text
    document.getElementById('btnApplyPastedExcel').addEventListener('click', () => {
      const val = document.getElementById('pasteExcelInput').value;
      const parsed = parseExcelText(val);
      if (parsed.length > 0) {
        excelRows = parsed;
        currentIndex = 0;
        updateDataTable();
        renderCanvas();
        alert(`🎉 Nạp thành công ${excelRows.length} sản phẩm từ nội dung dán!`);
      } else {
        alert('Không nhận diện được dữ liệu! Vui lòng chọn và copy các dòng từ Excel rồi dán vào ô.');
      }
    });

    // Quick load user's actual Decorté dataset button
    const USER_ACTUAL_DECORTE_DATA = `Mã sản phẩm,Tên sản phẩm,Ảnh sản phẩm,Quy cách sản phẩm,tổng giá trị quà tặng,Ảnh quà 1,tên quà 1,quy cách quà 1,ảnh quà 2,tên quà 2,quy cách quà 2,ảnh quà 3,tên quà 3,quy cách quà 3
4971710375831,TINH CHẤT DƯỠNG DA CHUYÊN SÂU LIPOSOME DECORTÉ,4971710375831,50ml,250000,4971710615753,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ 15ML,15ml,4971710599343,KEM DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ SAMPLE 10g,10g,,,
4971710375831,TINH CHẤT DƯỠNG DA CHUYÊN SÂU LIPOSOME DECORTÉ,4971710375831,50ml,130000,4971710994131,KEM DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ 10g,10g,4971710571417,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING II 14ml,14ml,4971710571400,NHŨ TƯƠNG DƯỠNG DA TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE II SAMPLE 14ml,14ml
4971710376524,KEM CHỐNG NẮNG BẢO VỆ DA DECORTÉ SUN SHELTER CC 10 - HỒNG ÁNH TÍM,4971710376524,35g,600000,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I 9ml,9ml,,,
4971710376524,KEM CHỐNG NẮNG BẢO VỆ DA DECORTÉ SUN SHELTER CC 10 - HỒNG ÁNH TÍM,4971710376524,35g,900000,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I SAMPLE 9.0ml,9ml,4971710583519,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ SAMPLE 0.8ml,0.8ml
4971710624700,KEM CHỐNG NẮNG BẢO VỆ DA HIỆU CHỈNH TONE DA DECORTÉ UV COMFORT TONE UP CC 10,4971710624700,Tuýp 30ml,2000000,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I SAMPLE 9.0ml,9ml,4971710565942,NHŨ TƯƠNG DƯỠNG DA TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9.0ml (Chai),9ml,,,
4971710624700,KEM CHỐNG NẮNG BẢO VỆ DA HIỆU CHỈNH TONE DA DECORTÉ UV COMFORT TONE UP CC 10,4971710624700,Tuýp 30ml,10000000,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I 9ml,9ml,4971710583519,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ SAMPLE 0.8ml,0.8ml
4971710378498,PHẤN PHỦ DECORTÉ BỘ 4 MÀU 101,4971710378498,16g,200000,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I 9ml,9ml,4971710583519,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ SAMPLE 0.8ml,0.8ml
4971710378498,PHẤN PHỦ DECORTÉ BỘ 4 MÀU 101,4971710378498,16g,876327,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I 9ml,9ml,4971710583519,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ SAMPLE 0.8ml,0.8ml
4971710624700,KEM CHỐNG NẮNG BẢO VỆ DA HIỆU CHỈNH TONE DA DECORTÉ UV COMFORT TONE UP CC 10,4971710624700,Tuýp 30ml,873487,4971710574340,PHẤN PHỦ DECORTÉ 02 SAMPLE 1.5G,1.5g,4971710565836,LOTION DƯỠNG ẨM SÂU VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ HYDRATING I 9ml,9ml,4971710583526,KEM DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ 1.2g,1.2g
4971710378498,PHẤN PHỦ DECORTÉ BỘ 4 MÀU 101,4971710378498,16g,674637,4971710574340,PHẤN PHỦ DECORTÉ 02 SAMPLE 1.5G,1.5g,4971710565942,NHŨ TƯƠNG DƯỠNG SÁNG DA VÀ TĂNG CƯỜNG ĐỘ ĐÀN HỒI DECORTÉ AQ MICRO-RADIANCE I SAMPLE 9ml,9ml,4971710994124,TINH CHẤT DƯỠNG DA CHUYÊN SÂU NGĂN NGỪA LÃO HÓA LIPOSOME DECORTÉ 6ml,6ml`;

    document.getElementById('btnLoadYourData').addEventListener('click', () => {
      const parsed = parseExcelText(USER_ACTUAL_DECORTE_DATA);
      excelRows = parsed;
      currentIndex = 0;
      updateDataTable();
      renderCanvas();
      alert('🎉 Đã nạp ngay tức thì bộ dữ liệu Decorté kèm toàn bộ 16 ảnh test từ Desktop của bạn!');
    });

    // Image handling
    function handleImageFiles(files) {
      if (!files || files.length === 0) return;
      let newCount = 0;
      Array.from(files).forEach(file => {
        const nameLower = file.name.toLowerCase();
        if (file.type.startsWith('image/') || nameLower.endsWith('.png') || nameLower.endsWith('.jpg') || nameLower.endsWith('.jpeg') || nameLower.endsWith('.webp')) {
          const cleanKey = file.name.trim().toLowerCase().replace(/\.[^/.]+$/, '');
          imageMap.set(cleanKey, file);
          newCount++;
        }
      });
      const badge = document.getElementById('imageCountBadge');
      badge.textContent = `✅ Đã nạp ${imageMap.size} ảnh`;
      badge.className = 'text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md';
      imageCache.clear();
      renderCanvas();
      alert(`🎉 Đã nạp thành công ${newCount} file ảnh vào kho!`);
    }
    folderInput.addEventListener('change', (e) => handleImageFiles(e.target.files));
    filesInput.addEventListener('change', (e) => handleImageFiles(e.target.files));

    // Get loaded image element smartly (from memory imageMap or preloaded EMBEDDED_ASSETS)
    async function getImageElement(fileNameOrKey) {
      if (!fileNameOrKey) return null;
      const cleanTarget = String(fileNameOrKey).trim().toLowerCase().replace(/\.[^/.]+$/, '');
      if (!cleanTarget) return null;

      if (imageCache.has(cleanTarget)) return imageCache.get(cleanTarget);

      // Check preloaded embedded assets (from test photogang)
      if (typeof window.EMBEDDED_ASSETS !== 'undefined') {
        for (const [k, dataUrl] of Object.entries(window.EMBEDDED_ASSETS)) {
          const normK = k.toLowerCase().replace(/\.[^/.]+$/, '');
          if (normK === cleanTarget || normK.startsWith(cleanTarget) || normK.includes(cleanTarget) || cleanTarget.includes(normK)) {
            return new Promise((resolve) => {
              const img = new Image();
              img.onload = () => { imageCache.set(cleanTarget, img); resolve(img); };
              img.onerror = () => resolve(null);
              img.src = dataUrl;
            });
          }
        }
      }

      // Check user uploaded files in imageMap
      let matchedFile = imageMap.get(cleanTarget);
      if (!matchedFile) {
        for (const [key, file] of imageMap.entries()) {
          if (key.startsWith(cleanTarget) || key.includes(cleanTarget) || cleanTarget.includes(key)) {
            matchedFile = file;
            break;
          }
        }
      }

      if (!matchedFile) return null;

      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => { imageCache.set(cleanTarget, img); resolve(img); };
        img.onerror = () => resolve(null);
        img.src = URL.createObjectURL(matchedFile);
      });
    }

    // Canvas Render Engine
    async function renderCanvas(targetCtx = ctx, isExport = false) {
      const W = previewCanvas.width;
      const H = previewCanvas.height;

      // 1. Draw Background Image
      if (bgImage.complete && bgImage.naturalWidth > 0) {
        targetCtx.drawImage(bgImage, 0, 0, W, H);
      } else {
        targetCtx.fillStyle = '#E9D5FF';
        targetCtx.fillRect(0, 0, W, H);
      }

      // Helper to retrieve data from row by flexible key lookup (normalize accents, spaces, case)
      function getVal(keys) {
        for (const k of keys) {
          const normK = k.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          for (const rowK of Object.keys(row)) {
            const normRowK = rowK.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (normRowK === normK || normRowK.includes(normK)) return row[rowK];
          }
        }
        return '';
      }

      // Extract gifts smartly: either from distinct columns (Quà 1, Quà 2...) OR multi-line column ("Tên quà tặng + khối lượng" & "SKU quà tặng")
      function getExtractedGifts() {
        const gifts = [];
        
        // Check multi-line column first (like user's file: "Tên quà tặng + khối lượng")
        const multiLineNames = getVal(['Tên quà tặng + khối lượng', 'Ten qua tang + khoi luong', 'Tên quà tặng', 'Quà tặng kèm']);
        const multiLineSkus = getVal(['SKU quà tặng', 'SKU QUÀ', 'SKU qua']);

        if (multiLineNames && String(multiLineNames).includes('\n')) {
          const nameLines = String(multiLineNames).split('\n').map(s => s.trim()).filter(Boolean);
          const skuLines = String(multiLineSkus || '').split('\n').map(s => s.trim()).filter(Boolean);

          nameLines.forEach((fullName, idx) => {
            // Try extracting spec (e.g. "15ML", "Chai 30 ML", "TUÝP 20G", "16g")
            let name = fullName;
            let spec = '';
            const matchSpec = fullName.match(/(?:chai|tuýp|sample|hộp|gói)?\s*(\d+(?:\.\d+)?\s*(?:ml|g|gam|miếng|viên))\b/i);
            if (matchSpec) {
              spec = matchSpec[1].toUpperCase();
              name = fullName.replace(matchSpec[0], '').trim();
            }
            gifts.push({
              name: name || fullName,
              spec: spec,
              sku: skuLines[idx] || ''
            });
          });
        } else if (multiLineNames) {
          // Single gift in this column
          gifts.push({
            name: String(multiLineNames).trim(),
            spec: '',
            sku: String(multiLineSkus || '').trim()
          });
        }

        // If not found from multi-line, check separate columns (Quà 1, Quà 2, Quà 3)
        if (gifts.length === 0) {
          for (let g = 1; g <= 3; g++) {
            const gName = getVal([`Tên quà ${g}`, `Ten qua ${g}`, `Quà tặng ${g}`]);
            const gSpec = getVal([`Quy cách quà ${g}`, `Quy cach qua ${g}`, `Dung tích quà ${g}`]);
            const gSku = getVal([`Ảnh quà ${g}`, `Anh qua ${g}`, `SKU quà ${g}`]);
            if (gName || gSku) {
              gifts.push({ name: gName, spec: gSpec, sku: gSku });
            }
          }
        }
        return gifts;
      }

      const giftsList = getExtractedGifts();

      // If auto-adapt gifts is enabled, check actual gift count in current row
      const autoAdapt = document.getElementById('autoAdaptGifts').checked;
      if (autoAdapt) {
        let activeCount = Math.min(3, Math.max(1, giftsList.length || 1));
        if (GIFT_PRESETS[activeCount]) {
          Object.assign(layout, JSON.parse(JSON.stringify(GIFT_PRESETS[activeCount])));
          updatePresetButtonsUI(activeCount);
        }
      }

      // 2. Draw Elements based on Layout
      for (const [key, item] of Object.entries(layout)) {
        if (item.visible === false) continue;

        if (item.type === 'image') {
          let imgFile = '';
          if (key === 'mainProdImg') {
            imgFile = getVal(['Ảnh sản phẩm', 'SKU sản phẩm', 'SKU SP', 'SKU', 'Mã sản phẩm', 'Hinh SP']);
          } else if (key === 'gift1Img') {
            imgFile = giftsList[0]?.sku || getVal(['Ảnh quà 1', 'SKU quà 1']);
          } else if (key === 'gift2Img') {
            imgFile = giftsList[1]?.sku || getVal(['Ảnh quà 2', 'SKU quà 2']);
          } else if (key === 'gift3Img') {
            imgFile = giftsList[2]?.sku || getVal(['Ảnh quà 3', 'SKU quà 3']);
          }

          const loadedImg = await getImageElement(imgFile);
          if (loadedImg) {
            drawImageFit(targetCtx, loadedImg, item.x, item.y, item.w, item.h);
          } else if (!isExport) {
            drawBoundingBox(targetCtx, item, key === selectedKey);
          }
        } else if (item.type === 'text') {
          let textVal = '';
          if (key === 'mainProdName') {
            textVal = getVal(['Tên sản phẩm', 'Ten san pham', 'Tên SP', 'Ten SP']);
          } else if (key === 'mainProdSpec') {
            textVal = getVal(['Khối lượng sản phẩm', 'Quy cách sản phẩm', 'Dung tích', 'Quy cách SP']);
          } else if (key === 'giftTotalBanner') {
            textVal = formatVND(getVal(['Giá trị quà tặng kèm', 'tổng giá trị quà tặng', 'Tổng giá quà tặng', 'Tổng giá quà']));
          } else if (key === 'gift1Name') {
            textVal = giftsList[0]?.name || getVal(['Tên quà 1', 'Ten qua 1']);
          } else if (key === 'gift1Spec') {
            textVal = giftsList[0]?.spec || getVal(['Quy cách quà 1', 'Quy cach qua 1']);
          } else if (key === 'gift2Name') {
            textVal = giftsList[1]?.name || getVal(['Tên quà 2', 'Ten qua 2']);
          } else if (key === 'gift2Spec') {
            textVal = giftsList[1]?.spec || getVal(['Quy cách quà 2', 'Quy cach qua 2']);
          } else if (key === 'gift3Name') {
            textVal = giftsList[2]?.name || getVal(['Tên quà 3', 'Ten qua 3']);
          } else if (key === 'gift3Spec') {
            textVal = giftsList[2]?.spec || getVal(['Quy cách quà 3', 'Quy cach qua 3']);
          if (textVal) {
            drawLayoutText(targetCtx, textVal, item);
          } else if (!isExport) {
            drawLayoutText(targetCtx, item.label, item, true);
          }

          if (!isExport && key === selectedKey) {
            drawSelectionFrame(targetCtx, item);
          }
        }
      }
    }

    function formatVND(val) {
      if (!val) return '';
      const num = Number(String(val).replace(/[^0-9]/g, ''));
      if (isNaN(num) || num === 0) return String(val);
      return new Intl.NumberFormat('vi-VN').format(num) + 'đ';
    }

    function drawImageFit(ctx, img, x, y, w, h) {
      const imgAspect = img.width / img.height;
      const boxAspect = w / h;
      let drawW, drawH, drawX, drawY;

      if (imgAspect > boxAspect) {
        drawW = w;
        drawH = w / imgAspect;
        drawX = x;
        drawY = y + (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgAspect;
        drawX = x + (w - drawW) / 2;
        drawY = y;
      }
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    function drawBoundingBox(ctx, item, isSelected) {
      ctx.save();
      ctx.strokeStyle = isSelected ? '#A855F7' : 'rgba(168, 85, 247, 0.4)';
      ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(item.x, item.y, item.w, item.h);
      ctx.fillStyle = isSelected ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.05)';
      ctx.fillRect(item.x, item.y, item.w, item.h);

      ctx.fillStyle = isSelected ? '#7E22CE' : '#A855F7';
      ctx.font = 'bold 12px "Plus Jakarta Sans"';
      ctx.textAlign = 'center';
      ctx.fillText(item.label, item.x + item.w / 2, item.y + item.h / 2 + 4);
      ctx.restore();
    }

    function drawSelectionFrame(ctx, item) {
      ctx.save();
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      const padding = 4;
      const left = item.align === 'center' ? item.x - item.w / 2 : (item.align === 'right' ? item.x - item.w : item.x);
      ctx.strokeRect(left - padding, item.y - item.h + padding, item.w + padding * 2, item.h + padding * 2);
      ctx.restore();
    }

    function drawLayoutText(ctx, text, item, isPlaceholder = false) {
      ctx.save();
      ctx.fillStyle = isPlaceholder ? 'rgba(168, 85, 247, 0.5)' : (item.color || '#111827');
      ctx.font = `${item.fontWeight || '700'} ${item.fontSize || 20}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = item.align || 'center';

      const words = String(text).split(' ');
      let line = '';
      let curY = item.y;
      const lineHeight = (item.fontSize || 20) * 1.25;
      const maxLines = item.maxLines || 2;
      let lineCount = 0;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > item.w && n > 0) {
          lineCount++;
          if (lineCount >= maxLines) {
            ctx.fillText(line.trim() + '...', item.x, curY);
            ctx.restore();
            return;
          }
          ctx.fillText(line.trim(), item.x, curY);
          line = words[n] + ' ';
          curY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line.trim(), item.x, curY);
      ctx.restore();
    }

    // Demo Data
    function getDemoRow() {
      return {
        "Mã sản phẩm": "SP01",
        "Tên sản phẩm": "TINH CHẤT DƯỠNG DA CHUYÊN SÂU\nLIPOSOME DECORTÉ",
        "Quy cách sản phẩm": "50ML",
        "Ảnh sản phẩm": "sp_main.png",
        "Tổng giá quà tặng": "2,998,000đ",
        "Tên quà 1": "TINH CHẤT DƯỠNG DA",
        "Quy cách quà 1": "15ML",
        "Ảnh quà 1": "qua_15ml.png",
        "Tên quà 2": "KEM DƯỠNG DA",
        "Quy cách quà 2": "10G",
        "Ảnh quà 2": "qua_kem1.png",
        "Tên quà 3": "KEM DƯỠNG DA",
        "Quy cách quà 3": "10G",
        "Ảnh quà 3": "qua_kem2.png",
      };
    }

    useDemoDataBtn.addEventListener('click', () => {
      excelRows = [
        getDemoRow(),
        {
          "Mã sản phẩm": "SP02",
          "Tên sản phẩm": "KEM DƯỠNG PHỤC HỒI & TÁI TẠO\nLIPOSOME ADVANCED CREAM",
          "Quy cách sản phẩm": "50G",
          "Ảnh sản phẩm": "sp2.png",
          "Tổng giá quà tặng": "1,850,000đ",
          "Tên quà 1": "SERUM PHỤC HỒI",
          "Quy cách quà 1": "12ML",
          "Ảnh quà 1": "qua_serum.png",
          "Tên quà 2": "SỮA RỬA MẶT DỊU NHẸ",
          "Quy cách quà 2": "30ML",
          "Ảnh quà 2": "qua_srm.png",
          "Tên quà 3": "BÔNG TẨY TRANG CAO CẤP",
          "Quy cách quà 3": "80 MIẾNG",
          "Ảnh quà 3": "qua_bong.png",
        }
      ];
      currentIndex = 0;
      updateDataTable();
      renderCanvas();
    });

    function updateDataTable() {
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = '';
      excelRows.forEach((row, i) => {
        const tr = document.createElement('tr');
        tr.className = `cursor-pointer hover:bg-purple-50 transition ${i === currentIndex ? 'bg-purple-50 font-semibold' : ''}`;
        tr.onclick = () => {
          currentIndex = i;
          currentRowIndex.textContent = `${currentIndex + 1} / ${excelRows.length}`;
          updateDataTable();
          renderCanvas();
        };
        function getRowField(keys) {
          for (const k of keys) {
            const normK = k.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            for (const rk of Object.keys(row)) {
              const normRk = rk.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              if (normRk === normK || normRk.includes(normK)) return row[rk];
            }
          }
          return '';
        }

        const pName = getRowField(['Tên sản phẩm', 'Tên SP']);
        const pSpec = getRowField(['Khối lượng sản phẩm', 'Quy cách sản phẩm', 'Dung tích']);
        const pTotalGift = getRowField(['Giá trị quà tặng kèm', 'tổng giá trị quà tặng', 'Tổng giá quà tặng', 'Tổng giá quà']);
        const multiGifts = getRowField(['Tên quà tặng + khối lượng', 'Quà tặng kèm', 'Tên quà 1']);

        tr.innerHTML = `
          <td class="px-2.5 py-2 text-slate-500">${i + 1}</td>
          <td class="px-2.5 py-2 text-slate-900 truncate max-w-[200px]" title="${pName}">${pName || '-'}</td>
          <td class="px-2.5 py-2 text-purple-700 font-semibold">${pSpec || '-'}</td>
          <td class="px-2.5 py-2 text-purple-700 font-bold">${formatVND(pTotalGift) || '-'}</td>
          <td colspan="3" class="px-2.5 py-2 text-slate-600 truncate max-w-[320px]" title="${multiGifts}">${multiGifts ? multiGifts.replace(/\n/g, ' + ') : '-'}</td>
        `;
        tbody.appendChild(tr);
      });
      document.getElementById('tableRowsCount').textContent = `${excelRows.length} sản phẩm`;
      document.getElementById('excelStatusBadge').textContent = `${excelRows.length} sản phẩm`;
      document.getElementById('excelStatusBadge').classList.remove('hidden');
      currentRowIndex.textContent = `${currentIndex + 1} / ${excelRows.length}`;
    }

    // Direct Drag-and-drop Interaction on Canvas
    function getCanvasCoords(e) {
      const rect = previewCanvas.getBoundingClientRect();
      const scaleX = previewCanvas.width / rect.width;
      const scaleY = previewCanvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }

    function hitTest(x, y) {
      // Check in reverse order
      const keys = Object.keys(layout);
      for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const item = layout[key];
        if (item.visible === false) continue;

        let left = item.x;
        let top = item.y;
        let right = item.x + item.w;
        let bottom = item.y + item.h;

        if (item.type === 'text') {
          top = item.y - item.h;
          bottom = item.y;
          if (item.align === 'center') {
            left = item.x - item.w / 2;
            right = item.x + item.w / 2;
          } else if (item.align === 'right') {
            left = item.x - item.w;
            right = item.x;
          }
        }

        if (x >= left && x <= right && y >= top && y <= bottom) {
          return key;
        }
      }
      return null;
    }

    previewCanvas.addEventListener('mousedown', (e) => {
      const pos = getCanvasCoords(e);
      const hitKey = hitTest(pos.x, pos.y);
      if (hitKey) {
        selectedKey = hitKey;
        selectedLayer.value = hitKey;
        updateInspector();

        isDragging = true;
        dragStartX = pos.x;
        dragStartY = pos.y;
        dragItemStartX = layout[hitKey].x;
        dragItemStartY = layout[hitKey].y;
        renderCanvas();
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const pos = getCanvasCoords(e);
      const dx = pos.x - dragStartX;
      const dy = pos.y - dragStartY;

      layout[selectedKey].x = Math.round(dragItemStartX + dx);
      layout[selectedKey].y = Math.round(dragItemStartY + dy);
      updateInspector();
      renderCanvas();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
      }
    });

    // Navigation
    prevRowBtn.addEventListener('click', () => {
      if (excelRows.length === 0) return;
      currentIndex = (currentIndex - 1 + excelRows.length) % excelRows.length;
      currentRowIndex.textContent = `${currentIndex + 1} / ${excelRows.length}`;
      updateDataTable();
      renderCanvas();
    });

    nextRowBtn.addEventListener('click', () => {
      if (excelRows.length === 0) return;
      currentIndex = (currentIndex + 1) % excelRows.length;
      currentRowIndex.textContent = `${currentIndex + 1} / ${excelRows.length}`;
      updateDataTable();
      renderCanvas();
    });

    // Download Single Image
    downloadCurrentBtn.addEventListener('click', () => {
      const row = excelRows[currentIndex] || getDemoRow();
      const code = row['Mã sản phẩm'] || `SP_${currentIndex + 1}`;
      const name = row['Tên sản phẩm'] || 'banner';
      const safeName = `${code}_${name}`.replace(/[^a-z0-9A-Z_À-ỹ]/g, '_').substring(0, 50);

      // Render clean without bounding boxes
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = previewCanvas.width;
      tempCanvas.height = previewCanvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      renderCanvas(tempCtx, true).then(() => {
        tempCanvas.toBlob((blob) => {
          saveAs(blob, `${safeName}.png`);
        }, 'image/png');
      });
    });

    // Batch Export ZIP
    batchExportBtn.addEventListener('click', async () => {
      if (excelRows.length === 0) {
        alert('Vui lòng nạp file Excel trước khi xuất ảnh hàng loạt!');
        return;
      }

      batchExportBtn.disabled = true;
      const progressWrap = document.getElementById('exportProgressWrapper');
      const progressBar = document.getElementById('exportProgressBar');
      const progressText = document.getElementById('exportProgressText');
      const progressPercent = document.getElementById('exportProgressPercent');

      progressWrap.classList.remove('hidden');
      const zip = new JSZip();

      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = previewCanvas.width;
      tempCanvas.height = previewCanvas.height;
      const tempCtx = tempCanvas.getContext('2d');

      const originalIndex = currentIndex;

      for (let i = 0; i < excelRows.length; i++) {
        currentIndex = i;
        progressText.textContent = `Đang xuất ảnh: ${i + 1}/${excelRows.length}`;
        const pct = Math.round(((i + 1) / excelRows.length) * 100);
        progressPercent.textContent = `${pct}%`;
        progressBar.style.width = `${pct}%`;

        await renderCanvas(tempCtx, true);

        const dataUrl = tempCanvas.toDataURL('image/jpeg', 0.94);
        const base64Data = dataUrl.split(',')[1];

        const row = excelRows[i];
        const code = row['Mã sản phẩm'] || `SP_${i + 1}`;
        const name = row['Tên sản phẩm'] || 'banner';
        const safeName = `${code}_${name}`.replace(/[^a-z0-9A-Z_À-ỹ]/g, '_').substring(0, 60);

        zip.file(`${safeName}.jpg`, base64Data, { base64: true });
      }

      currentIndex = originalIndex;
      renderCanvas();

      progressText.textContent = 'Đang đóng gói file ZIP...';
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `bo_anh_khuyen_mai_${new Date().toISOString().slice(0, 10)}.zip`);

      progressText.textContent = `Hoàn tất xuất ${excelRows.length} ảnh!`;
      setTimeout(() => {
        batchExportBtn.disabled = false;
        progressWrap.classList.add('hidden');
      }, 3000);
    });

    // Sample Excel Download
    downloadSampleExcelBtn.addEventListener('click', () => {
      const sample = [
        {
          "Mã sản phẩm": "SP01",
          "Tên sản phẩm": "TINH CHẤT DƯỠNG DA CHUYÊN SÂU\nLIPOSOME DECORTÉ",
          "Quy cách sản phẩm": "50ML",
          "Ảnh sản phẩm": "sp_serum.png",
          "Tổng giá quà tặng": "2998000",
          "Tên quà 1": "TINH CHẤT DƯỠNG DA",
          "Quy cách quà 1": "15ML",
          "Ảnh quà 1": "qua_15ml.png",
          "Tên quà 2": "KEM DƯỠNG DA",
          "Quy cách quà 2": "10G",
          "Ảnh quà 2": "qua_kem1.png",
          "Tên quà 3": "KEM DƯỠNG DA",
          "Quy cách quà 3": "10G",
          "Ảnh quà 3": "qua_kem2.png"
        },
        {
          "Mã sản phẩm": "SP02",
          "Tên sản phẩm": "KEM DƯỠNG PHỤC HỒI BAN ĐÊM\nDECORTÉ LIPOSOME CREAM",
          "Quy cách sản phẩm": "50G",
          "Ảnh sản phẩm": "sp_cream.png",
          "Tổng giá quà tặng": "1950000",
          "Tên quà 1": "NƯỚC THẦN PHỤC HỒI",
          "Quy cách quà 1": "30ML",
          "Ảnh quà 1": "qua_nuocthan.png",
          "Tên quà 2": "SỮA RỬA MẶT DƯỠNG ẨM",
          "Quy cách quà 2": "20ML",
          "Ảnh quà 2": "qua_srm.png",
          "Tên quà 3": "BÔNG TẨY TRANG",
          "Quy cách quà 3": "120 MIẾNG",
          "Ảnh quà 3": "qua_cotton.png"
        }
      ];

      const ws = XLSX.utils.json_to_sheet(sample);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "DanhSachSP");
      XLSX.writeFile(wb, "file_mau_san_pham_va_qua_tang.xlsx");
    });

    // Auto-load user's actual 10 products dataset immediately upon page load
    try {
      if (typeof parseExcelText === 'function') {
        const initialData = parseExcelText(USER_ACTUAL_DECORTE_DATA);
        if (initialData && initialData.length > 0) {
          excelRows = initialData;
          currentIndex = 0;
          updateDataTable();
          setTimeout(() => {
            renderCanvas();
          }, 200);
        }
      }
    } catch (e) {
      console.warn("Auto load error:", e);
    }

    // Initial setup
    updateInspector();
  
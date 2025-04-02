const equipmentData = [
    {
        img: "assets/img/equip/equip-1.png",
        title: `Hydraulic Excavator (Jumbo) Manufacturer Kobelco Construction Machinary`,
        details: [
            { key: "Model", value: "SK235SRDLC-3", icon: "assets/img/popupicon/model.png" },
            { key: "Total length (mm)", value: "9,160", icon: "assets/img/popupicon/length.png" },
            { key: "Total width (mm)", value: "3,190", icon: "assets/img/popupicon/width.png" },
            { key: "Total height (mm)", value: "3,170", icon: "assets/img/popupicon/height.png"  },
            { key: "Weight (kg)", value: "28 000", icon: "assets/img/popupicon/kg.png"  },
            { key: "Size", value: "26T (91.0) and over", icon: "assets/img/popupicon/size.png"  },
            { key: "Volume (m3)", value: "92.629", icon: "assets/img/popupicon/volume.png"  },
            { key: "Air conditioning A/C", value: "", icon: "assets/img/popupicon/air.png"  },
            { key: "Arm / boom Demolition machine specifications", value: "", icon: "assets/img/popupicon/message.png" }
        ]
    },
    {
        img: "assets/img/equip/equip-2.png",
        title: "Hydraulic excavator, Manufacturer Hitachi Construction Machinery",
        details: [
            { key: "Total length (mm)", value: " 2,950", icon: "assets/img/popupicon/length.png" },
            { key: "Total width (mm)", value: "2,990", icon: "assets/img/popupicon/width.png" },
            { key: "Total height (mm)", value: "9,000", icon: "assets/img/popupicon/height.png" },
            { key: "Serial Number", value: "207558", icon: "assets/img/popupicon/serial.png" },
            { key: "Model", value: "ZX225USRLC-3", icon: "assets/img/popupicon/model.png" },
            { key: "Size", value: "18~25t (0.7) Class", icon: "assets/img/popupicon/size.png" },
            { key: "Weight (kg)", value: "22700", icon: "assets/img/popupicon/kg.png" },
            { key: "Volume (m3)", value: "79.385", icon: "assets/img/popupicon/volume.png" },
            { key: "Exhaust gas clear / Third / Cockpit / Cabin / Chassis /Iron caterpillar", value: "", icon: "assets/img/popupicon/message.png" }
        ]
    },
    {
        img: "assets/img/equip/equip-3.png",
        title: "Hydraulic excavator, Manufacturer Comatsu",
        details: [
            { key: "Model", value: "PC200-11", icon: "assets/img/popupicon/model.png" },
            { key: "Serial Number", value: "503542", icon: "assets/img/popupicon/serial.png" },
            { key: "Total length (mm)", value: "9,505", icon: "assets/img/popupicon/length.png" },
            { key: "Total width (mm)", value: "2,805", icon: "assets/img/popupicon/width.png" },
            { key: "Total height (mm)", value: "3,135", icon: "assets/img/popupicon/height.png"  },
            { key: "Volume (m3)", value: "83.584", icon: "assets/img/popupicon/volume.png"  },
            { key: "Weight (kg)", value: "19800", icon: "assets/img/popupicon/kg.png"  },
            { key: "Size", value: "18~25t (0.7) Class", icon: "assets/img/popupicon/size.png"  },
            { key: "Air conditioning A/C", value: "", icon: "assets/img/popupicon/air.png"  },
            { key: "Exhaust gas clear / 4TH Type/Cockpit/Cabin/Arm/Boom /Standard Chassis", value: "", icon: "assets/img/popupicon/message.png" }
        ]
    },
    { // essss
        img: "assets/img/equip/equip-4.png",
        title: "Hydraulic excavator, (Jumbo) Sumitomo Construction Machinery",
        details: [
            { key: "Model", value: "SH120-7", icon: "assets/img/popupicon/model.png" },
            { key: "2023 1h New used vehicle, ready for immediate delivery. Piping . Crane Special price Piping with piping Combined piping.", value: "", icon: "assets/img/popupicon/message.png" }
        ]
    },// essss
    {
        img: "assets/img/equip/equip-5.png",
        title: "Hydraulic excavator, Manufacturer Hitachi Construction Machinery",
        details: [
            { key: "Model", value: "ZX135USK-6", icon: "assets/img/popupicon/model.png" },
            { key: "Machine No:", value: "101406", icon: "assets/img/popupicon/serial.png" },
            { key: "YR 2017", value: "", icon: "assets/img/popupicon/size.png" },
            { key: "HR 3057(DC 2024)", value: "", icon: "assets/img/popupicon/size.png" },
            { key: "KM ---", value: "", icon: "assets/img/popupicon/size.png"  },
            { key: "Rank B", value: "", icon: "assets/img/popupicon/size.png"  },
            { key: "Warranty ---", value: "", icon: "assets/img/popupicon/size.png"  },
            { key: "Rubber pad/ Multi/Shared piping/Crane/Front Guard /Head Guard", value: "", icon: "assets/img/popupicon/message.png" }
        ]
    }
];

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupSubtitle = document.getElementById("popup-subtitle");
const popupDetails = document.getElementById("popup-details");

function openPopup(index) {
    const equipment = equipmentData[index];

    popupImg.style.backgroundImage = `url(${equipment.img})`;

    // მთავარი სათაური
    popupTitle.textContent = equipment.title;
    // დამატებითი სათაური (თუ გინდა, რომ განსხვავებული იყოს)
    popupSubtitle.textContent = `${equipment.title}`;

    popupDetails.innerHTML = "";
    // წარწერების ჩამოყალიბება და აიკონის დამატება
    equipment.details.forEach(detail => {
        const li = document.createElement("li");
        
        // აიკონის ელემენტი
        const icon = document.createElement("img");
        icon.src = detail.icon;
        icon.alt = `${detail.key} icon`;
        icon.classList.add("detail-icon");
        
        li.appendChild(icon);  // აიკონი
        li.appendChild(document.createTextNode(`${detail.key}: ${detail.value}`));  // ტექსტი

        popupDetails.appendChild(li);
    });

    popup.style.display = "flex";
    overlay.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
}


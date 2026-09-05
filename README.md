# TypeMotive

[Website](https://mole88.github.io/TypeMotive/) · [Download the latest release](https://github.com/mole88/TypeMotive/releases/latest)

Public distribution repository for TypeMotive, a Windows touch-typing trainer.
Contains the download website and official binary releases. Application source code is not stored here.

## Publishing

Attach TypeMotive-Setup-win-x64.exe and SHA256SUMS.txt to a published GitHub Release.
The Pages workflow verifies the checksum, includes the installer in the website, and refreshes release metadata.
Site changes on main also deploy automatically.

## Website assets

The design adapts the supplied TypeMotive Site reference: Cormorant Garamond headings, Lora body text, warm gold accents and a light background. Font licenses are included under site/assets/fonts.

Application images are rendered directly from the WPF application windows at double resolution, with a separate data directory. Statistics and imported texts shown are demonstration data, identified in the captions. PNG originals open from the WebP previews.

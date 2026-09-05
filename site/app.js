const siteBase = new URL(".", document.currentScript.src);
const fallbackRelease = {
  version: document.querySelector("[data-release-version]").textContent,
  size: document.querySelector("[data-release-size]").textContent,
  sha256: document.querySelector("[data-release-checksum]").textContent,
  download: "./download/TypeMotive-Setup-win-x64.exe",
};

function applyRelease(release) {
  const data = { ...fallbackRelease, ...release };

  document.querySelectorAll("[data-release-version]").forEach((element) => {
    element.textContent = data.version;
  });
  document.querySelectorAll("[data-release-size]").forEach((element) => {
    element.textContent = data.size.replace(/МБ|MB/g, document.documentElement.lang === "ru" ? "МБ" : "MB");
  });
  document.querySelectorAll("[data-release-checksum]").forEach((element) => {
    element.textContent = data.sha256.toUpperCase();
  });
  document.querySelectorAll("[data-download-link]").forEach((element) => {
    element.href = new URL(data.download, siteBase).href;
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

fetch(new URL("release.json", siteBase), { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("Release metadata is unavailable");
    return response.json();
  })
  .then(applyRelease)
  .catch(() => applyRelease(fallbackRelease));

const lightbox = document.querySelector('.lightbox');
if (lightbox && typeof lightbox.showModal === 'function') {
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const preview = lightbox.querySelector('img');
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      lightbox.querySelector('p').textContent = preview.alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) { const r = lightbox.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) lightbox.close(); } });
}

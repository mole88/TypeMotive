const fallbackRelease = {
  version: "1.0.3",
  size: "62 МБ",
  sha256: "FC4A7CCAAE061BD794F0BB0A7C59C6197014DE6ADABE13E5D8FD0C8BCD093E9F",
  download: "./download/TypeMotive-Setup-win-x64.exe",
};

function applyRelease(release) {
  const data = { ...fallbackRelease, ...release };

  document.querySelectorAll("[data-release-version]").forEach((element) => {
    element.textContent = data.version;
  });
  document.querySelectorAll("[data-release-size]").forEach((element) => {
    element.textContent = data.size;
  });
  document.querySelectorAll("[data-release-checksum]").forEach((element) => {
    element.textContent = data.sha256.toUpperCase();
  });
  document.querySelectorAll("[data-download-link]").forEach((element) => {
    element.href = data.download;
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

fetch("./release.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("Release metadata is unavailable");
    return response.json();
  })
  .then(applyRelease)
  .catch(() => applyRelease(fallbackRelease));

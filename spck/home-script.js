const imageUrls = [
    "https://t3.ftcdn.net/jpg/00/39/11/72/360_F_39117236_5kAPKvDCu88mGIbSVBKoGCzcNJZsN9sI.jpg",
    "https://rstatic.stores.roadrunnersports.com/locations/27_193_Webp.net-resizeimage__26_.jpg",
    "https://media.timeout.com/images/103532267/750/422/image.jpg",
  ];
  
  function createSliderImages() {
    const sliderImages = document.querySelector(".slider-images");
    imageUrls.forEach((url) => {
      const image = document.createElement("img");
      image.src = url;
      sliderImages.appendChild(image);
    });
  }
  
  createSliderImages();
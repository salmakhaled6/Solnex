import React from "react";
import {
  CarouselWrapper,
  prev,
  next,
  moveTo,
  switchTo,
  presentIndex,
} from "react-pretty-carousel";

function ImageSlider() {
  const [images, setImages] = React.useState([
    "https://s3-alpha-sig.figma.com/img/1daa/cbce/e144762b9ddfef87760ea1f5d8d4f56a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A3dtQ7KtwkLoqW3h91EwpZvcc~5wKJI-tzQkQYHG3lxI1Q9-FZSETaAu~DcW0Bq7Dhnn1zUWZ2s6Ky8QKHF6AUj4d~BKoIr1wpaildVFUROV4B8f7iBe9v1UWPn~u7FtkDcUUpYbD4BPH8NA7gJv5Q-CS2FiuGTd3fcoO6dYvyU7gAmHih~XoxrZ~nvnXE9egdWZw5kM~XSV6v8tu3Dw6BuckWkwRBtgPq9dmoWRN58vqt4mDxPu~i3oSDRoc8F6-aqgdmf8~47zRSCQxNydBMIx09YEdusd5WGruWxqUFcVrRystCXd8GbVXIHXT6lQJfNSyW7d4mb3A3jMTXAZKg__",
"https://s3-alpha-sig.figma.com/img/0f13/1084/c3a622230abab624da3708b73cacbcc7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rZ8XAMScvjnZZNIFX05b2tUCJ~URPnh1vfC9~iHqwTO-yZGwqBJvZib~8wSqZPqZpuCtQYfFk2QiEx0RFX3R4eWucAX4eeICv9R8dNZOxwNSBiiO5Jbbe3EuzJ3RVZdLxo~5lqkc93i9oEvX--P-cZO7q5rcRo27YX4~RvurB15dc-mSarcWcFSSoxqgaGLQ9t0WTAwXLLvLBvmj9UbNs~~Y8Bu9qb54PwRHLupgHOm4gM928K6wxoXXD3NEzsMPGVo13-2Zv~8uKzIZfnthKbUZRYZH-CBIPOQ~RsXC1NiBZTHIUcVcLzsy4q8pWOdh9OdkTbBK-yYVv0x6-f-u9g__",    "https://s3-alpha-sig.figma.com/img/1daa/cbce/e144762b9ddfef87760ea1f5d8d4f56a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A3dtQ7KtwkLoqW3h91EwpZvcc~5wKJI-tzQkQYHG3lxI1Q9-FZSETaAu~DcW0Bq7Dhnn1zUWZ2s6Ky8QKHF6AUj4d~BKoIr1wpaildVFUROV4B8f7iBe9v1UWPn~u7FtkDcUUpYbD4BPH8NA7gJv5Q-CS2FiuGTd3fcoO6dYvyU7gAmHih~XoxrZ~nvnXE9egdWZw5kM~XSV6v8tu3Dw6BuckWkwRBtgPq9dmoWRN58vqt4mDxPu~i3oSDRoc8F6-aqgdmf8~47zRSCQxNydBMIx09YEdusd5WGruWxqUFcVrRystCXd8GbVXIHXT6lQJfNSyW7d4mb3A3jMTXAZKg__",
'https://s3-alpha-sig.figma.com/img/42ca/e038/ccf98b6bfd6a0ce40c41bdf08a684841?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4CIiEimUTKL8-wP6ePr1rBskTUobUUU8EmmI-nHjXo50aAOHHkv42zJ-OvFdPnBlogopvEMiNGFtB5JBuq4GcgEx2luEt0AkG5UbYkWxp2meq968pao~e-~t9uq3zNo0BjFybI-wIVUMmyLrEnJJ3tYgj1~6BpUyNKU2cLASE3Wl8OSqbUp8pTzdtTsLxV0GO09tgt48PTGYSl7hXdRFODVU9ZgCznJOOvEKsvP7uMqFY2PnEB-q~jXLrQZWrhpf9KkoUxLfyHY9T3qyxwuM03y7e7aoK1GsWp9dW9un98ZqmPusfytTEzq4-KhA81cZD10vJSQJ6ddimgo27AA4g__ ','https://s3-alpha-sig.figma.com/img/42ca/e038/ccf98b6bfd6a0ce40c41bdf08a684841?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m4CIiEimUTKL8-wP6ePr1rBskTUobUUU8EmmI-nHjXo50aAOHHkv42zJ-OvFdPnBlogopvEMiNGFtB5JBuq4GcgEx2luEt0AkG5UbYkWxp2meq968pao~e-~t9uq3zNo0BjFybI-wIVUMmyLrEnJJ3tYgj1~6BpUyNKU2cLASE3Wl8OSqbUp8pTzdtTsLxV0GO09tgt48PTGYSl7hXdRFODVU9ZgCznJOOvEKsvP7uMqFY2PnEB-q~jXLrQZWrhpf9KkoUxLfyHY9T3qyxwuM03y7e7aoK1GsWp9dW9un98ZqmPusfytTEzq4-KhA81cZD10vJSQJ6ddimgo27AA4g__ ' ]);
  return (
    <div className="slider-box">
      <CarouselWrapper items={3} mode="gallery">
        {images.map((image, index) => (
          <img src={image} alt={`pic-${index}`} key={image} />
        ))}
      </CarouselWrapper>
    </div>
  );
}

export default ImageSlider;

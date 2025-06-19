import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-5  flex flex-col gap-3">
      <h1 className="text-lg font-bold   text-gray-800">Hakkımızda</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Stoxon, küçük ve orta ölçekli işletmelerin stok ve tedarik süreçlerini
        kolayca yönetebilmesi için modern, bulut tabanlı bir platform sunar.
        Amacımız, işletmelerin operasyonel verimliliğini artırmak ve manuel
        takip süreçlerini dijitalleştirerek zaman tasarrufu sağlamaktır.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Kuruluşumuzdan bu yana kullanıcılarımızın ihtiyaçlarını önceliklendirdik
        ve sürekli olarak gelişen bir sistem inşa ettik. Kullanıcı dostu
        arayüzümüz, güçlü raporlama araçlarımız ve esnek entegrasyon
        seçeneklerimiz ile işletmenizin büyümesine katkıda bulunuyoruz.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Ekibimiz, yazılım geliştirme, iş analitiği ve müşteri ilişkileri
        alanlarında deneyimli profesyonellerden oluşmaktadır. Siz de verimli bir
        stok ve tedarik yönetimi deneyimi yaşamak istiyorsanız, Stoxon ailesine
        katılın.
      </p>
    </div>
  );
};

export default About;

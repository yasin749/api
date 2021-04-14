TODO LIST

Kullanıcı ekleme silme endpointlerinde authentication, authorization kontrolü olmalı
admin ve user scope ları oluşturulmalı
userTypeId hardcoded 2 verildi, düzeltilmeli

database query leri controller içerisinde yapılmamalı, api katmanı oluşturulmalı

endpointleri ve controller ları admin ve user için ayrıştırmak gerekebilir

pagination mapper

belongstomany relation olan alanlarda id ye göre sıralama olmuyor(avaluationgroup, image and gallery)
custom scope kullanımında sorun var(image absolute url)


kategori hierarşisi

swagger da her item için model oluşturulmalı

category => parentCategoryId
product => categoryId, coverGalleryId, contentGalleryId, evaluationGroupId. categoryId ve evaluationGroupId ekleme modunda zorunlu olmalı
mevcutsa eğer numara olup olmadığını bakılmalı

unhandledRejection


db:rebuild -> sequelize db:rebuild olmalı

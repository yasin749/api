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

galeriye image ekleme endpointi olmalı

comment,  eklerken user id jwt ile çözülmeli

unhandledRejection

login endpointi oluşturulmalı

route,controller sıraları route path lerine göre refactor edilmeli

status, deleted gibi alanlar isBoolean ile validate edilmeli
sort isInt

response validation message eng
error mesajında hangi alan hatalı olduğu belirtilmemeli. bu ayrı bir attribute olarak verilmeli

validation lara bağlantılı tabloların id kolonlarıda eklenecek XXID gibi

db:rebuild -> sequelize db:rebuild olmalı


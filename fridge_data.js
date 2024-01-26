// Description: Fridge error codes and solutions.
export const error_codes = [
    {
        "error_code": "1A",
        "name": "Soğutma Sorunu",
        "short_description": "Buzdolabı içinde yeterli soğutma sağlanmıyor.",
        "description": ["Termostat ayarlarını kontrol edin ve gerekirse düzeltin.", "Buzdolabının içindeki hava giriş ve çıkışını engelleyen nesneleri kaldırın.", "Buzdolabının kondansatör bobinlerini temizleyin.","Termostat ayarlarını kontrol edin ve gerekirse düzeltin.", "Buzdolabının içindeki hava giriş ve çıkışını engelleyen nesneleri kaldırın.", "Buzdolabının kondansatör bobinlerini temizleyin.","Termostat ayarlarını kontrol edin ve gerekirse düzeltin.", "Buzdolabının içindeki hava giriş ve çıkışını engelleyen nesneleri kaldırın.", "Buzdolabının kondansatör bobinlerini temizleyin.","Termostat ayarlarını kontrol edin ve gerekirse düzeltin.", "Buzdolabının içindeki hava giriş ve çıkışını engelleyen nesneleri kaldırın.", "Buzdolabının kondansatör bobinlerini temizleyin."]
    }, {
        "error_code": "1B",
        "name": "Su Sızıntısı",
        "short_description": "Buzdolabından su sızıyor.",
        "description": ["Su hortumlarını kontrol edin ve sızıntıya neden olan hasarlı bir hortumu değiştirin.", "Su filtresini kontrol edin ve gerektiğinde değiştirin.", "Buzdolabının su giriş valfini kontrol edin ve sızıntıyı önlemek için düzeltin veya değiştirin."]
    }, {
        "error_code": "1C",
        "name": "Kapı Contası Arızası",
        "short_description": "Buzdolabı kapı contası arızalı.",
        "description": ["Kapı contasını görsel olarak kontrol edin ve herhangi bir yırtık veya deformasyon varsa değiştirin.", "Kapı contasının sızdırmazlığını kontrol edin, gerekirse ayarlayın.", "Kapıyı tamamen kapatın ve kapatma mekanizmasını kontrol edin."]
    }, {
        "error_code": "1D",
        "name": "Işıklar Çalışmıyor",
        "short_description": "Buzdolabı içindeki ışıklar yanmıyor.",
        "description": ["Ampulleri kontrol edin ve gerekirse değiştirin.", "Ampul soketlerini kontrol edin ve hasarlıysa onları değiştirin.", "Buzdolabının iç aydınlatma düğmesini kontrol edin ve çalışıp çalışmadığını test edin."]
    }, {
        "error_code": "1E",
        "name": "Buz Yapıcı Çalışmıyor",
        "short_description": "Buzdolabının buz yapma işlevi çalışmıyor.",
        "description": ["Buz yapıcı su hattını kontrol edin ve gerekirse temizleyin.", "Buz yapma mekanizmasını kontrol edin, donmuş su veya yabancı cisimler varsa temizleyin.", "Buz yapıcı bobinlerini temizleyin ve buz yapma işlevini test edin."]
    }, {
        "error_code": "1F",
        "name": "Kapı Alarmı Sorunu",
        "short_description": "Kapı alarmı sürekli olarak çalıyor.",
        "description": ["Kapı contasını kontrol edin ve tamamen kapalı olduğundan emin olun.", "Kapı sensörünü kontrol edin, gerekirse temizleyin veya ayarlayın.", "Buzdolabının kapı alarmı ayarlarını kontrol edin ve gerektiğinde düzeltin."]
    }, {
        "error_code": "0",
        "name": "Buzdolabı Aşırı Titriyor",
        "short_description": "Buzdolabı aşırı derecede titriyor.",
        "description": ["Buzdolabını düz bir zemine yerleştirin.", "Buzdolabının ayaklarını kontrol edin ve gerektiğinde ayarlayın.", "Buzdolabının titreşimi azaltmak için titreşim önleyici pedler kullanın."]
    }, {
        "error_code": "1",
        "name": "Fan Sorunu",
        "short_description": "Soğutma fanı çalışmıyor veya anormal sesler çıkarıyor.",
        "description": ["Fan bıçaklarını kontrol edin ve gerektiğinde temizleyin.", "Fan motorunu kontrol edin, gerekirse yağlayın veya değiştirin.", "Fanın bağlantılarını kontrol edin ve gevşek bağlantıları düzeltin."]
    }, {
        "error_code": "2",
        "name": "Buzdolabı Sıcaklığı Yüksek",
        "short_description": "Buzdolabının iç sıcaklığı beklenenden yüksek.",
        "description": ["Termostat ayarlarını kontrol edin ve düşük bir sıcaklıkta olduğundan emin olun.", "Kondansatör bobinlerini temizleyin.", "Kapıyı sık sık açmamaya dikkat edin ve kapı contasının sağlam olduğundan emin olun."]
    }, {
        "error_code": "3",
        "name": "Su Soğutmada Sorun",
        "short_description": "Su soğutma işlevi düzgün çalışmıyor.",
        "description": ["Su soğutma sisteminin su besleme hortumunu kontrol edin ve tıkanıklıkları giderin.", "Su soğutma fanını kontrol edin, gerektiğinde temizleyin veya değiştirin.", "Su soğutma bobinlerini temizleyin, donmuş suyun çözülmesini sağlayın."]
    }, {
        "error_code": "4",
        "name": "Buzdolabı Şişme",
        "short_description": "Buzdolabının dışındaki malzemeler şişiyor.",
        "description": ["Kapı contasını kontrol edin ve tamamen kapatıldığından emin olun.", "Termostat ayarlarını kontrol edin ve sıcaklığı düşürün.", "Hava dolaşımını sağlamak için buzdolabının içindeki nesneleri düzenleyin."]
    }, {
        "error_code": "5",
        "name": "Gaz Sızıntısı",
        "short_description": "Buzdolabından gaz sızıntısı algılandı.",
        "description": ["Hemen odayı havalandırın ve güvenli bir yere çıkın.", "Buzdolabını kapatın ve gaz vanasını kapatın.", "Gaz sızıntısını gidermek için gerekli onarımları yapın."]
    }, {
        "error_code": "6",
        "name": "Buzdolabı Çalışmıyor",
        "short_description": "Buzdolabı hiç çalışmıyor.",
        "description": ["Buzdolabının enerji kaynağını kontrol edin, priz ve elektrik kablosunu kontrol edin.", "Termostat ayarlarını kontrol edin ve düşük bir sıcaklıkta olduğundan emin olun.", "Soğutma sisteminin genel sağlığını kontrol edin."]
    }, {
        "error_code": "7",
        "name": "Buz Yapıcı Çalışırken Anormal Ses",
        "short_description": "Buz yapıcı çalışırken anormal sesler duyuluyor.",
        "description": ["Buz yapıcı içindeki donmuş suyu kontrol edin ve gerektiğinde temizleyin.", "Buz yapıcı mekanizmasının içindeki parçaları kontrol edin, gevşek olanları sıkın veya hasarlı olanları değiştirin.", "Buz yapıcı motorunu kontrol edin, gerektiğinde yağlayın veya değiştirin."]
    }, {
        "error_code": "8",
        "name": "Dondurucu Kapısı Açık Uyarısı",
        "short_description": "Dondurucu kapısı açıkken uyarı veriyor.",
        "description": ["Dondurucu kapısının tamamen kapatıldığından emin olun.", "Kapı sensörünü kontrol edin, gerektiğinde temizleyin veya ayarlayın.", "Dondurucu kapısının sık sık açılıp kapanmasını önlemek için iç düzenlemeler yapın."]
    }, {
        "error_code": "9",
        "name": "Dondurucu İçi Aşırı Isınma",
        "short_description": "Dondurucu içinde aşırı sıcaklık artışı algılandı.",
        "description": ["Dondurucu kapısının tamamen kapatıldığından emin olun.", "Dondurucu içindeki hava dolaşımını kontrol edin ve engelleri kaldırın.", "Dondurucu termostat ayarlarını kontrol edin, gerektiğinde düşük bir sıcaklığa ayarlayın."]
    }, {
        "error_code": "10",
        "name": "Su İçici Çalışmıyor",
        "short_description": "Buzdolabının su içici işlevi düzgün çalışmıyor.",
        "description": ["Su giriş hortumunu kontrol edin ve tıkanıklıkları giderin.", "Su filtresini kontrol edin ve gerektiğinde değiştirin.", "Su içici bağlantılarını kontrol edin, gerekirse temizleyin veya sıkın."]
    }, {
        "error_code": "11",
        "name": "Buz Makinesi Yavaş Çalışıyor",
        "short_description": "Buz makinesi normalden daha yavaş çalışıyor.",
        "description": ["Buz makinesinin içindeki donmuş suyu kontrol edin ve temizleyin.", "Su basıncını kontrol edin ve gerekirse düzeltin.", "Buz makinesi mekanizmasındaki parçaları kontrol edin ve gerektiğinde bakım yapın."]
    }, {
        "error_code": "12",
        "name": "Koku Algılandı",
        "short_description": "Buzdolabında anormal bir koku algılandı.",
        "description": ["Buzdolabının içini temizleyin ve gıda maddelerini düzenleyin.", "Aktif karbon filtresini kontrol edin ve gerektiğinde değiştirin.", "Kapı contalarını temizleyin ve gerekirse değiştirin."]
    }, {
        "error_code": "13",
        "name": "Buzdolabı Işıkları Yanmıyor",
        "short_description": "Buzdolabının içindeki ışıklar yanmıyor.",
        "description": ["Ampulleri kontrol edin ve gerektiğinde değiştirin.", "Işıkların bağlantılarını kontrol edin ve gevşek olanları sıkın.", "Işıkların anahtarını kontrol edin ve gerekirse değiştirin."]
    }, {
        "error_code": "14",
        "name": "Kapı Contası Sızıntısı",
        "short_description": "Buzdolabının kapı contasından su sızıntısı oluyor.",
        "description": ["Kapı contasını görsel olarak kontrol edin, yırtık veya hasarlı bir alan varsa değiştirin.", "Contanın düzgün bir şekilde yerleştirildiğinden emin olun.", "Contanın bağlantı noktalarını kontrol edin ve gerektiğinde sıkın."]
    }, {
        "error_code": "15",
        "name": "Buz Makinesi Çalışmıyor",
        "short_description": "Buz makinesi hiç çalışmıyor.",
        "description": ["Buz makinesinin fişini kontrol edin ve prize tam olarak takılı olduğundan emin olun.", "Buz makinesinin su seviyesini kontrol edin ve gerekirse su ekleyin.", "Buz makinesi anahtarını kontrol edin, kapalı değilse açın.", "Buz makinesinin donmuş olabilecek su hattını kontrol edin ve gerektiğinde çözün."]
    }, {
        "error_code": "16",
        "name": "Buz Üretimi Düşük",
        "short_description": "Buz makinesi normalden daha az buz üretiyor.",
        "description": ["Buz makinesinin su filtresini kontrol edin ve gerekirse değiştirin.", "Buz makinesinin su hattını kontrol edin ve tıkanıklıkları giderin.", "Buz makinesinin soğutma sistemini kontrol edin ve gerektiğinde temizleyin.", "Buz makinesi ayarlarını kontrol edin ve gerekirse buz üretimini artırmak için ayarları düzenleyin."]
    }, {
        "error_code": "17",
        "name": "Fan Gürültülü Çalışıyor",
        "short_description": "Buzdolabının içindeki fan anormal bir şekilde gürültülü çalışıyor.",
        "description": ["Fan bıçaklarına yabancı cisimlerin girmiş olup olmadığını kontrol edin ve temizleyin.", "Fanın montajını kontrol edin ve gerekirse sıkın.", "Fan motorunu kontrol edin, aşınma veya arıza varsa değiştirin."]
    }, {
        "error_code": "18",
        "name": "Buzdolabı Sık Sık Açılıp Kapanıyor",
        "short_description": "Buzdolabı sürekli olarak açılıp kapanıyor.",
        "description": ["Kapı contasının düzgün kapatıldığından emin olun.", "Sıcaklık ayarlarını kontrol edin ve gerekirse ayarları değiştirin.", "Buzdolabının içindeki hava dolaşımını kontrol edin ve engelleri temizleyin.", "Buzdolabının dışındaki ısı kaynaklarından uzak bir yerde konumlandırıldığından emin olun."]
    }, {
        "error_code": "19",
        "name": "Su Sıcaklığı Yetersiz",
        "short_description": "Su soğutma sistemi yetersiz çalışıyor.",
        "description": ["Su soğutma sistemini kontrol edin ve gerekirse temizleyin.", "Su giriş hattını kontrol edin ve tıkanıklıkları giderin.", "Su soğutma sisteminin enerji kaynağını kontrol edin ve bağlantıları sıkın."]
    }, {
        "error_code": "1a",
        "name": "Buzlu Su Tahliye Sorunu",
        "short_description": "Buzlu su tahliye sistemi düzgün çalışmıyor, su birikmesi oluyor.",
        "description": ["Buz makinesinin su hattını kontrol edin ve tıkanıklıkları giderin.", "Buzlu su haznesini çıkarın ve içinde biriken buzları temizleyin.", "Su tahliye hattını kontrol edin ve gerektiğinde temizleyin.", "Buzlu su tahliye sisteminin bağlantılarını kontrol edin ve sıkın."]
    }, {
        "error_code": "1b",
        "name": "Aydınlatma Sorunu",
        "short_description": "Buzdolabının içindeki aydınlatma çalışmıyor.",
        "description": ["Lamba veya LED ampulü arızalıysa, değiştirin.", "Aydınlatma devresinin bağlantılarını kontrol edin ve gerekirse sıkın.", "Aydınlatma anahtarının düzgün çalıştığından emin olun ve gerektiğinde değiştirin.", "Aydınlatma devresindeki sigortayı kontrol edin ve gerektiğinde değiştirin."]
    }, {
        "error_code": "1c",
        "name": "Buz Makinesi Sıcaklık Sorunu",
        "short_description": "Buz makinesi belirli bir sıcaklıkta çalışmıyor.",
        "description": ["Buz makinesinin sıcaklık ayarlarını kontrol edin ve gerekirse düzenleyin.", "Buz makinesinin soğutma sistemini kontrol edin ve gerekirse temizleyin.", "Buz makinesi sıcaklık sensörünü kontrol edin ve arızalıysa değiştirin.", "Buz makinesinin enerji kaynağını kontrol edin ve bağlantıları sıkın."]
    }, {
        "error_code": "1d",
        "name": "Buzdolabı Soğutmuyor",
        "short_description": "Buzdolabı içindeki sıcaklık düşük, soğutmuyor.",
        "description": ["Buzdolabının sıcaklık ayarlarını kontrol edin ve gerekirse düzenleyin.", "Buzdolabının soğutma sisteminin üzerindeki buzu temizleyin.", "Buzdolabının kapısının düzgün kapatıldığından emin olun.", "Buzdolabının dışındaki hava sirkülasyonunu kontrol edin ve gerektiğinde temizleyin."]
    }, {
        "error_code": "1e",
        "name": "Buzlu Su Lezzet Sorunu",
        "short_description": "Buzlu su lezzetinde bir sorun var.",
        "description": ["Buzlu su filtresini kontrol edin ve gerekirse değiştirin.", "Su kaynağını kontrol edin ve gerekirse temizleyin.", "Buzlu su haznesini düzenli olarak temizleyin.", "Buzlu su soğutma sisteminin sıcaklık ayarlarını kontrol edin ve gerekirse ayarları değiştirin."]
    }, {
        "error_code": "1f",
        "name": "Kapı Kapatma Sorunu",
        "short_description": "Buzdolabı kapısı tam olarak kapanmıyor veya sık sık açılıp kapanıyor.",
        "description": ["Kapının etrafındaki contaları kontrol edin ve gerekirse temizleyin veya değiştirin.", "Kapının menteşe ve kilit mekanizmalarını kontrol edin, gerekirse yağlayın.", "Kapı contasının düzgün bir şekilde yerleştirildiğinden emin olun ve gerektiğinde ayarlayın.", "Kapı kapanma sensörünü kontrol edin ve gerekirse temizleyin veya ayarlayın."]}
]
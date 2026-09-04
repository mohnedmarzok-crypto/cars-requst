self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "تحديث في طلبات السيارات";
  const options = {
    body: data.body || "لديك طلب جديد في النظام",
    icon: 'https://cdn-icons-png.flaticon.com/512/744/744465.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
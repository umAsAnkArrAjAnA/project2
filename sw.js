self.addEventlistener('install',function(event){
  event.waitUntil(
    caches.open('v1').then(function(cache){
      return cache.addAll([

      ]);
    })
  );
});
self.addEventlistener('fetch',function(event){
  event.respondwidth(
    caches.match(event.request).then(function(resp){
      return resp||fetch(event request)then(function(response))
  })
  )
})

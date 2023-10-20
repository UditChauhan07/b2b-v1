'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aaaa37acd77daa524bfeb6a74d91f509",
"assets/AssetManifest.json": "9d847f163015aaf76203edc8b9d3606e",
"assets/assets/brands/Bobbi%2520Brown.png": "4907834831635f9aed93c65e3ecc5296",
"assets/assets/brands/Bumblea%2520and%2520Bumble.png": "a0029f1e9136588abd765209516dcc1e",
"assets/assets/brands/By%2520Terry.png": "b702d20af9b650f5bb5f9ed1165aa5af",
"assets/assets/brands/Byredo.png": "b8222cc1dd36ff49edd5b7258b1dcafc",
"assets/assets/brands/Diptyque.png": "c9370aadf53fc414a5b857dd845a9681",
"assets/assets/brands/Estee%2520Lauder.png": "6e1d7f27612bc7b29d7c3126ecd0e829",
"assets/assets/brands/Evelom.png": "ca0257480448bb2ea7d57daf93ede8e8",
"assets/assets/brands/Kevyn%2520Aucoin.jpg": "235edc7d686732b440ec80472834914c",
"assets/assets/brands/Maison%2520Margiela.png": "0a1d3e68fe361fe48d7a3ba5f8bff012",
"assets/assets/brands/R%2520co%2520Bleu.png": "dbf537105f55bbc40cf4c193ef2c2875",
"assets/assets/brands/R%2520co.png": "b5606b4c4e1f10cfc9ef4ae22017be37",
"assets/assets/brands/revive.png": "2c6588d79dfbea64050a29cc94763fbc",
"assets/assets/brands/rmsbeauty.png": "6d6bd1926d2e9aa776b8a4ee9f736410",
"assets/assets/brands/Smashbox.jpg": "f74b31cfd31e39459240607ca0bb7d2f",
"assets/assets/brands/susanne%2520kaufman.png": "95f5423e864d621f384e6d6bf67d791e",
"assets/assets/icons/BFS%2520Portal%2520Site.png": "e8906845e93a527df999060c58d0659b",
"assets/assets/icons/Brands-Bg-Icon.png": "2e388983d68642ed9bec39d1b4a278d9",
"assets/assets/icons/Brands-Bg-Icon.svg": "198eb11bfe3196f3b8a1fb6cbd575ed6",
"assets/assets/icons/cart.svg": "05200fffc800d87a21c128549be6c67f",
"assets/assets/icons/default-image.png": "0e417231100ee5d59c1cdbfd9a5d58a3",
"assets/assets/icons/document-checklist-icon-in-flat-.jpg": "82ec0798a68341bb30850ed0b402f6a2",
"assets/assets/icons/Group%252030.png": "af14e806010717eadf6d0702cc3e844a",
"assets/assets/icons/icon/Group%252057.png": "940e6e6861963b2f2034ce78fd4578fd",
"assets/assets/icons/icon/Group%252058.png": "4ef7639418aac00b900d854f123a551f",
"assets/assets/icons/icon/Group.png": "e868c73a8a6fa08cffa16decda00d49c",
"assets/assets/icons/icon/Vector.png": "67fc1f777ea72aa87dee2fbaf84481aa",
"assets/assets/icons/image.png": "6f46f50bf4fa687e3446c948b6759fae",
"assets/assets/icons/read-icon.png": "60b97f9cacba768b87dbcf3887cadac2",
"assets/assets/icons/report.png": "035e88c4c1a45ca557bbb88f04f0e39c",
"assets/assets/icons/reportss.png": "1bff157f786f9d5709e84646506b7569",
"assets/assets/icons/setting.svg": "469aa8dce072538da761e26983f0c777",
"assets/assets/icons/user.svg": "95065a518fabb035734f2167cbd39a3d",
"assets/assets/img/BeautyFashionLogo.png": "67d097ffb43af9e71e40e3fe304cdeab",
"assets/assets/img/BFS-makeup-bg-Mobile%25201.png": "671f44133a0fe43d6922264d947259c6",
"assets/assets/img/BFS-makeup-bg-with-logo.jpg": "0372f162f82b204ed1f803618648da5b",
"assets/assets/img/btif-sale-logo%25202.png": "0949bd4b4750ca31b7025f1097a12b39",
"assets/assets/img/image%252019.png": "91a412a8ae89ed2166252956db930b15",
"assets/assets/img/image%252020.png": "e6c0f53d174ab69e8b16826104701964",
"assets/assets/img/vector20.png": "3e75020a6c46a116bf6fe68f1dabf01d",
"assets/assets/imgss/AERIN%2520LOGO.png": "20f2f7273a9c89279fdbeab8ed8ce3c3",
"assets/assets/imgss/AERMIS%2520LOGO.png": "108ef694b59a02914493d704560d4e2f",
"assets/assets/imgss/Bobbi-brown.png": "16fbcc80869131cc1a574d98abd8d997",
"assets/assets/imgss/Bumbleandbumbe.png": "4a0be1058e99733f9458a8a22d17967d",
"assets/assets/imgss/BY%2520TERRY.jpg": "6b4c7bf5119d424c0a0e71c811642f54",
"assets/assets/imgss/Byredo.jpg": "39fa9b24d3b64bfb6d12131667fa368e",
"assets/assets/imgss/Diptyque.jpg": "7584303631d79037bf770879d4f0a11d",
"assets/assets/imgss/ESTEE%2520LAUDER%2520LOGO.png": "34f617f4b4966a18fa839b1ef959eac0",
"assets/assets/imgss/Eve%2520Lom.png": "f900705d7a32c31dcba863407f590d94",
"assets/assets/imgss/glamglow.png": "ef209c6787e0a8dfe455d84456700b80",
"assets/assets/imgss/Kevyn%2520Aucoin%2520Cosmetics.jpg": "cfd99c24e3fd8e659e1a1b28c29dbfcd",
"assets/assets/imgss/Maison%2520Margiela.png": "2ae26f2eea502d4d1e564fc7be7725b3",
"assets/assets/imgss/rco-bleu-logo.png": "a18a2ee2ae5dcb2563a2f1a311ced536",
"assets/assets/imgss/RCO_LOGO.jpg": "34e4561cfe5db0f95a49594bdaa2c913",
"assets/assets/imgss/revive-logo.jpg": "063b5f0c86fef5c0c4441d2b46949beb",
"assets/assets/imgss/RMS%2520Beauty%2520logo%2520(1).jpg": "933f77cccf4121f253e667cd3fe0d3aa",
"assets/assets/imgss/RMS%2520Beauty%2520logo%25201.png": "e5b904a54d5d4d12c2e355d5606bc59c",
"assets/assets/imgss/RMS%2520Beauty%2520logo.jpg": "adb17296c782cf66ec7b2e542961e796",
"assets/assets/imgss/RMS%2520Beauty%2520logo.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/RMS%2520Beauty.png": "229ea45b34981286647a17f058527ed9",
"assets/assets/imgss/Smashbox.jpg": "1b1845ae26bb549441c8ec5e38d6e346",
"assets/assets/imgss/Susanne%2520Kaufmann.jpg": "2798893c649eeb3dee55ade5cff5fc88",
"assets/assets/lotties/check-dark-green.json": "7fbb467a78409050a2d96028a2a013ed",
"assets/assets/new/beauty-Spot.svg": "91a09373cd1869e44dfed92002b40b99",
"assets/assets/new/BeautyFashion%2520Logo.svg": "f8eaf1393e1533238e755926f8d5f4f8",
"assets/assets/new/bobbi%2520brown.png": "4907834831635f9aed93c65e3ecc5296",
"assets/assets/new/Bobbi%2520Brown.svg": "472a0d72558115c652fbd4f24610a52a",
"assets/assets/new/face%25201.svg": "f30aa6c4dd8e9ec3511d0c0529a2ab82",
"assets/assets/new/Girl.png": "dacffdcc02c16d53a3287353605e81da",
"assets/assets/new/Group.png": "62388f7fa78f9f14c9823a394183ee40",
"assets/assets/new/image%252019%2520(2).png": "9a3ef9e9b4446638a73c8c1319ab5a5e",
"assets/assets/new/image%25206%2520(1).png": "f56e8e9e7245c8e3065dd32822ba390c",
"assets/assets/new/image%25207%2520(1).png": "aa900f1cfaa24a57a5444b4632a60ed1",
"assets/assets/new/product.svg": "90e8e7e75e2f630898f9c241cbebda03",
"assets/assets/new/Products.png": "d9af00590cae89affb291a5f7c3d89b9",
"assets/assets/new/Rectangle%2520116.png": "6b981c7181969a585b1634e2969fd5fe",
"assets/assets/new/RectangleBB.png": "26b605c99c6d2e55f36e63a69d36161f",
"assets/assets/new/revive.png": "2c6588d79dfbea64050a29cc94763fbc",
"assets/assets/new/Revive.svg": "912975df649b465aa7b59687ea09074d",
"assets/assets/new/Rms%2520Beauty.svg": "e9bea7765814bb0bb49e37db6495945d",
"assets/assets/new/rmsbeauty.png": "6d6bd1926d2e9aa776b8a4ee9f736410",
"assets/assets/new/Vector.png": "67cb2e228f9a1ef24cde26c5573bfec5",
"assets/assets/new/velom.png": "ca0257480448bb2ea7d57daf93ede8e8",
"assets/assets/new/VELOM.svg": "49825b117fb5c45bb08143ad4bc9a91f",
"assets/assets/Svg/delet1.svg": "0c6d7dfe2264d6725c1dc5d61c08ce2a",
"assets/assets/Svg/Downlod-icon.svg": "83619685208a3027c55c25b1a294f346",
"assets/assets/Svg/image%25209.svg": "c24dcbee1c4753fb9ff7d317d6533ad3",
"assets/assets/Svg/list.svg": "4abbd1d117b11bf4e39bda7bd299f8eb",
"assets/assets/Svg/LOGO.svg": "05b819ec91f038765b9f058541a3a334",
"assets/assets/Svg/Vector.svg": "f102460ce796e6958e98909b8cc7905a",
"assets/FontManifest.json": "240d4724201573c4de1368418b1e148c",
"assets/fonts/AktivGrotesk-Black.ttf": "ff1bf49c9363e8f6eff431947d2c0092",
"assets/fonts/AktivGrotesk-BlackItalic.ttf": "01e3b071a08f8ea74cd0d6004463316d",
"assets/fonts/AktivGrotesk-Bold.ttf": "802e32a5bd065d3f6ccfdbd917134d73",
"assets/fonts/AktivGrotesk-BoldItalic.ttf": "08ac9ccf3e6ad90179dc4fd94e9a5583",
"assets/fonts/AktivGrotesk-Hairline.ttf": "edc4e2524545735b8d54455e26c27f83",
"assets/fonts/AktivGrotesk-HairlineItalic.ttf": "4160614511f9ff887687845ea73d8e51",
"assets/fonts/AktivGrotesk-Italic.ttf": "6056779aff9eb1ea673d57e53f876af4",
"assets/fonts/AktivGrotesk-Light.ttf": "98a3bc93fd244236b46ed91f8170edf7",
"assets/fonts/AktivGrotesk-LightItalic.ttf": "d1b90c6de5022a66dc7bb3744e7d3185",
"assets/fonts/AktivGrotesk-Medium.ttf": "9a7fa3d7a50fb3c55ecea670a9743965",
"assets/fonts/AktivGrotesk-MediumItalic.ttf": "d316fa201e0814ffa4a16656ba5c5eec",
"assets/fonts/AktivGrotesk-Regular.ttf": "f859d0ea0c2034c79db3ea62a4622606",
"assets/fonts/AktivGrotesk-Thin.ttf": "9cca26d4228a5b12cb1f49b3e8979ca6",
"assets/fonts/AktivGrotesk-ThinItalic.ttf": "6adb861ecb950cd1d98d5c0f5587c03c",
"assets/fonts/AktivGrotesk-XBold.ttf": "132fd821d138c66cae7d214bbc05223a",
"assets/fonts/AktivGrotesk-XBoldItalic.ttf": "2bd6474c5b13a6c9679d85f811d1ba97",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5f19f633a0c521ac682e3b43c452ea73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"b2b-favicon-removebg-preview.png": "3467298771f7829376d5c1d2293b2e88",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/b2b-favicon-removebg-preview.png": "3467298771f7829376d5c1d2293b2e88",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d06ca2f688c45a8f7c20a1d945fcd733",
"/": "d06ca2f688c45a8f7c20a1d945fcd733",
"main.dart.js": "0dfa3fc58c8f94daa72ff80b3280f49e",
"manifest.json": "ba0cb000658b83e571e2d80faaf11847",
"version.json": "7dc938a1fc1446bac0b8eac80709c890"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

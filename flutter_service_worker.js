'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1df5ee28c9955544f2ebe06a6c829b57",
".git/config": "b7f55ea9afdf7b3dd684b44f2956ddc0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8fce670e350a9a70e651b865c154e118",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7248327dd55f566d013b3fea87ff9996",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb3f1dfae9c499993bb8dd5e1f8f19fc",
".git/logs/refs/heads/main": "eb3f1dfae9c499993bb8dd5e1f8f19fc",
".git/logs/refs/remotes/origin/HEAD": "9dc69bfc6a82bb9a7d3df349b607257d",
".git/logs/refs/remotes/origin/main": "727d51afad84c64a90cfa462f8592a73",
".git/objects/1a/d84afd782d16a2def7b1b8425d184c9eb113f9": "b55e2e0b7e5e8741db521409b1bf59ce",
".git/objects/1c/ef3c91b2ee81c08057542df5947c48ff83e47c": "743d762a5d3b143da91bb318ed97dd07",
".git/objects/23/010b9664e35207eb3decb173c595c996b2a7cf": "813cc99e645ea8a59381d4defa9ae95b",
".git/objects/33/0e83fae5d8c46a49f8e8cbad5ebc4d4327d6a8": "b649c9e7e6a2cf0efca5f6a654f8083a",
".git/objects/37/159bc493eb74e016be34a99b547b9cbd45af2f": "6b07373e36a26a0633405b0de7bd00f0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/56/3f7ae93c3789c1112f4c2c0324895e85a19681": "eb2481a04654b8abdb096e7c1e27ad25",
".git/objects/59/6626a3e37c3337b8f8e590920920ab7566646a": "7743b81065d365a954f484b346d89fd0",
".git/objects/5e/770ef82c2205db46416806ee85aa36f5b99b01": "784cf9df637487bc2777f88b8e9a1570",
".git/objects/60/0b693ed83903b34d86125f6d2454d482ce2c3f": "1a671731a333e2bc15bce1236420a096",
".git/objects/61/82dd086a40d0953bef79de079205a7c4935972": "322321e46f27ef3f2fcec628ac99e368",
".git/objects/62/f3106e2bef458bc1a5b1e179c6c06e5e2106da": "23b4f15f0eb987e9d0bd1cfe9538fc41",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/76/b884a7e0943da326467a8aa19e0c5524df30fc": "781a101d11ab143e1f186f425517c7da",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/84370c81815ea45af78f15e131463fa36bb1b6": "271e5b8d30018ae0f8a2608b188d6748",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c56a131552d88aca33ffd5ab7944afbc551100": "34081ffb3805edfd2a15f696fae4efca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/6708feb7783edcb91a2376c5f95b018b3ac6a6": "5ba25201f52f15cd2cb24fd6bbe2160b",
".git/objects/9d/86133ae65ac9d0f62ddfd1f2352fae32cf6326": "3fc21abd24de0f1fd4a9bd0957c35217",
".git/objects/9e/ae5fbbcc3882c7a6e7eabc21a52765d4512d39": "86f11f19ae4f41f487bf2ccd36dc2171",
".git/objects/9f/ad43bdb17a81e303d6035294237df8eefc3700": "6be4f91f15c089fc9d3214007f3f1145",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/130bb3bfb07e6ef0c506aa0d5b28d40df526d8": "4c433f1f985cb964eaa8f4616d5678c6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/952209089ce680ec1448c71bdca6827ab1b593": "8a16bc056f7ecf290311084bbce42bbf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/d29ea1b25bf2117d9a63b945d465c5a04634bf": "163e7eb4712108fae2d39e6124ce9b37",
".git/objects/c4/b66deae0a3dcb8191a2a85f68ab4a8eeebd578": "8dbc08682c1a28233e50f057c02a6f9e",
".git/objects/cd/bbe4b36de64fe769aee36a7aa1ba8e1afa4311": "24536642d24bdd62b26159b5677b99cc",
".git/objects/ce/05960f34635e3fd1681f725ecdc9b5cdf38897": "bdf452f07f6dfebb7c5a6baeea52cec3",
".git/objects/cf/c172c56d4d6442fdc9e07a787f1557c2e134f2": "423e0bb2c18026ab608fc4b3f46368d7",
".git/objects/d3/a60eccdf1d04497e448dcc22650eee8a5fa05d": "924c24c11803e6f02476772e058ead8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/74d934373b47afbe94a97475e1a367db989234": "840be0b284dfb7632be08ca1041b81e6",
".git/objects/e4/3b2a72b6e2d962918d190fd2efcda094eea0af": "3460c4f7bc1d74bf93ad6e4cf709de00",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b545a834bc5015ec56ab1df8cbc5ba82cdea51": "03da412067257b29b90538dcab575357",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/7eec2a034058422ef9da8882c7e2f59aab6122": "d259626b378a0f468944a4894de3b954",
".git/objects/fd/7ca06e9a7e816028d03f932ff634f65b48254e": "12eeac655c17d864f9ce4f9fa378775a",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/objects/ff/4874021ee503c043bfa069e6b67d440a9dee90": "66fc6b6981f6b4b9b8b5f692b61a8034",
".git/refs/heads/main": "720e4c2ff4639ab535b1a5d49e6dfedc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "720e4c2ff4639ab535b1a5d49e6dfedc",
".vscode/settings.json": "19751b2a32e46d1ba1477f357123a898",
"assets/AssetManifest.json": "3a685477ed7af177765552486473f8b0",
"assets/assets/fonts/Righteous-Regular.ttf": "ca399fd2286e6d1e50bd65bd950b33ef",
"assets/assets/imgs/edu.png": "b06b81ea2d2b76aad9ce57852e5b8b4a",
"assets/assets/imgs/entertaining.png": "7e53de4192a8f52a270e326586d147c9",
"assets/assets/imgs/f.png": "35bdd39b03cb4aa4de02b3eff750b276",
"assets/assets/imgs/grid.png": "5be15eba1d98cf233110b305000fb747",
"assets/assets/imgs/hannen.png": "20b710a2d79fbbdd4a6a821ede8a4402",
"assets/assets/imgs/health.jpg": "ce5c0a955847c08b4366e97ade42a161",
"assets/assets/imgs/health.png": "ce5c0a955847c08b4366e97ade42a161",
"assets/assets/imgs/instagram.png": "601573c4679b18e408e274ed00b51da4",
"assets/assets/imgs/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/imgs/Logo.png": "2b952c48532e8f8d401729f6a9e4033e",
"assets/assets/imgs/Logo.svg": "747c1cf75b7f0cc524ce208f34f5668e",
"assets/assets/imgs/mail.png": "a5be59ce514671e7b6d8c52f168fbbce",
"assets/assets/imgs/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/imgs/main_top.png": "b3b3ca7e1c438a614f07d2f93561c32c",
"assets/assets/imgs/main_top1.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/imgs/nut.png": "a4ac8fa9648d5eeb4288287998bb630a",
"assets/assets/imgs/qr.png": "a9cc42172535f28d14afa8e2eea50d08",
"assets/assets/imgs/r.png": "decb57babd05673bb7011bc1de8bc8f7",
"assets/assets/imgs/s.png": "81a6c720eec0b0951c2476e91f0df90b",
"assets/assets/imgs/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/assets/imgs/t.png": "b6594dbe8b2eaca5cd9612e0a24e6610",
"assets/assets/imgs/web.png": "0731309cde5dfc6f990b992bd82427df",
"assets/FontManifest.json": "89f0d69bd3800f477a2ef527caf30df1",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f847838fae5fcecf048c497fd34b8ff5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52a395dcfcddd7d0c8d6f9938838c9ec",
"/": "52a395dcfcddd7d0c8d6f9938838c9ec",
"main.dart.js": "1af35d0235c2e81a9ef538aa92075809",
"manifest.json": "f2ae0e31a33cbc32da9a0aeb1010b344",
"version.json": "4d36170c190871fb1dd27772b506cb1e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

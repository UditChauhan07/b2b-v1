'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba740abc1db0db4313e6a0d823be2010",
".git/config": "7f7a2c707b5e9173f7fc689b95c6b0d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "38361ebe7a983138d9b597400af20aa3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "908d6270d72b06d51009ae17f7316b02",
".git/logs/refs/heads/main": "777e14a04d8aefd70e9b3366b8653e73",
".git/logs/refs/remotes/b2b/main": "20007c229387e031fc2bc92d84b1099d",
".git/objects/01/0def90b3a23cd00753a6aa8759c9acd65f1120": "1420d58d53d7b6e8537b440d5239ace1",
".git/objects/01/9a3bc423730dac52662fdd65f204b9d5cafd82": "23ede9a3f73eed1f851f8cd2725a394e",
".git/objects/01/d25ba66db28e472d9c6339570d96dfa8251e44": "1d384ffb1942909b297dde495689e265",
".git/objects/02/414cfc882593577a7ddf83058c4de4749a6db2": "45d450caf0993a9e60a3403af0a8ed8a",
".git/objects/02/4eb096c29c158cf6f76a9ddf2dce984409be31": "d8ed6817187788094eda0cdb01eedd80",
".git/objects/02/ff70ed12d48b2ced0747bd55c671285c88846f": "90d92ca76b4fa4de9a86bb94aef24dbd",
".git/objects/03/4224038cb4930027a127640360a60932fc0d7f": "a805781ce93691ee51182d94c6cd3c6b",
".git/objects/04/129c66fbf085e93701cd82bec94d49ce5e9db0": "c341cc2a70cdeddc0e32fb9bf7080320",
".git/objects/05/57309dc4d64d6d6d84ac710a23d8549d70349b": "5570b9197496af784debdd0fee6a41ee",
".git/objects/06/a9a45085a5c6953f1244e0a6948a2a1150e3f0": "7f49a66fca67462febdb224fb34b06d7",
".git/objects/07/723381d8293360630c01ac17a206070335ae46": "590129cde7807b45ea672596ec44df3b",
".git/objects/08/e56a61b323f6feba31aadc93b222b0f1265e33": "6cbec7091c83d736ca9a21a89a874083",
".git/objects/0b/e4169a5d067899ce64ae1efa9aee6f1d4a06d2": "24068aaa5268db1085be66aec95a809c",
".git/objects/0c/1663cbaa58716db927fc95ebb0d319a5457b5d": "04f1148694a9cf2a5bde8a79e626441d",
".git/objects/0c/739318211afa368f267b398f435bb57f479682": "7d56fc2b3e333e553afa54296553866d",
".git/objects/0d/e354328d31cc7d09f6583aff970322aaaa7ea5": "abc4e66baa7822097ef69159dade3220",
".git/objects/0f/99c8ebab68b40b40c4f5fcba672658c25df68f": "7e09bf9d853df19e117da63f6565ea5e",
".git/objects/11/273a92b89830d0dcc3f700a32a6836506a39a9": "e7aa1d02924228b584839c2bcfe6e0be",
".git/objects/13/6348fc86aec02559ed22b4d41f00b42a674374": "e6d9f26b3d68cbe522ef746fb5785ed0",
".git/objects/14/9c5da97328ba857058341f63d0b1e2fae401ca": "794606b2dd69f22ba2509e3524099430",
".git/objects/15/aeb98048c566d479f23a249a46d8507b654243": "dd51ecb08a89c94135c93d08463cb56b",
".git/objects/19/6d51883c74e02c5939aca7f5dd67205b67fdaa": "65c7d5a66323ec63b814892370c53fcc",
".git/objects/1a/4f400657d0b3132b53ac14a45d578b7708faad": "7399c9e2382ad3a62795e580f74c1777",
".git/objects/1a/fa8a797673c8342de680be4d2ee1ec760a9704": "cc2e8c6161085c6989e11c85452c0752",
".git/objects/1b/0062dacf019871f72ab56999fcad26cc032122": "9955c6714c6caa4c63bdda2d53f762ce",
".git/objects/1c/0379748eb8a27cbd2a30991bf4fe648c2bbdb2": "d454812c92c6a8d8eeeec89bf2831d2c",
".git/objects/1c/99b9a7b946481f998b7210f4484e404e027489": "ad2cfac1cc949abcf58bef4ac0d24ac3",
".git/objects/1d/e2e94cb7e9ed6e73c85cbd209c249e580b9c10": "2702913e3f942c86d45c5f1a98365017",
".git/objects/1e/0f7eb8dc33314240534b028a8e66369a0fb496": "08e9959fe3be7356c006f0e9feb28fe0",
".git/objects/1e/76cfc9a27a5d0980df8e649655bc0611674fc8": "3184532ae39059ef56d8e6fc0b655a2b",
".git/objects/1f/e5f0c0d7b35d5736fb4c17892908a431bcb589": "550faa2b1ffbffb3c0a65ea6af58a76c",
".git/objects/20/28bc764cad40453c17ba83d114b8e6e77a746a": "09a11f8182c49238190da5cb787afa7a",
".git/objects/20/f5c771deea1bbad5f1ca3eb85d5480d9723a37": "cd6d88ea11bb01702d1b29f59a21c6d6",
".git/objects/21/0792e31e22b87dd74f349b8e9453590236f2cc": "2034137b9cd46c86fb06c10b93fb4aeb",
".git/objects/21/3d4d1c96b29e772dd1ebe534cf6059f20663b7": "f2735b880caa1031d6d237c7566483f7",
".git/objects/21/d440dc097d98a18dcc15acd635c586289d6e88": "c8cc845f5c2972355c5d30c003999555",
".git/objects/22/11b8bdbc7093ca7364f526a48486d2b7fa2276": "8cf0d777f6d23b13c70ad9b3698264c3",
".git/objects/22/650bda92ff3da2a7125c2298a3f7fe88b535a2": "b81eaf62d19b635e47e9f639430d72ee",
".git/objects/24/6ec75b6375aa28dce08a5d0301b4d8d393080b": "59dc81b60739504d4685649202201832",
".git/objects/25/e7ca2de9a5fa40de51a29cd1096bd615798eb4": "cea8ca0518cdd279c2ba596d3cbef3a2",
".git/objects/27/d2ca57c56498231eab0bdc04c0a5c24e64f311": "259963dbaace13f299c8bde00e722d13",
".git/objects/29/24e07ab27fbb929afb03a0efdcb88ddb36e2e4": "6c0684876a738f5419718b1b9a337871",
".git/objects/29/2e839dc81a78c18926bcf5e1ab473b2f8de53c": "061f70b390e3cebb18aadcfae2e2b254",
".git/objects/2a/bd7d77c87384859fe90d470de3847b677fec58": "c756e3654af780a2c7e6ded0aabce2fb",
".git/objects/2b/b8edfeba4b7fcaeedf5ee9ce27c719918b1d8b": "1697353a932e994f8072ec1a92b9028b",
".git/objects/2b/dc25843e0e67b8859ea2e0ea928ff189da94a6": "01752cda1582e725c6c91ab51570e6e8",
".git/objects/2c/a546f96d186da534cbf8295c011e0add4b6422": "e5bfa0c760d7adbaa07f35bac9ad69df",
".git/objects/2d/a6b8dd02e934cb03c4e3ddba6cf57276083192": "19635893bde4431e9429465768be33bd",
".git/objects/2d/af223761479ad1664c050b87e0f5688129165c": "7a5565ce2e737ee8ae7fd59aec7a3c50",
".git/objects/2e/6a5b2743b651fe08029447e225c63c3c3fea98": "d18cac68e9baf094bbf6f3881cda8318",
".git/objects/2f/5116995c1b83f4829a2710159fec814bd33d60": "9aa1bc6d686883e200e7a170254c4801",
".git/objects/2f/a85b9c581c2f4253aab5a29779759c634e833c": "b6c3de872fda994f12e9b80b5ee0d5f2",
".git/objects/33/7351f986fd0d6d81362d9152e913a8de43d890": "6f92b9a4f27708b35715c59a0162cecb",
".git/objects/33/e80bd94671810b9117b2cb52e5211354d9b029": "f94278d700018ce83f8f47aba096c200",
".git/objects/33/f7dc76ad18f06e0f3ddf58660b83872d0745c4": "5893ea24f0163a828095e276dbeb1150",
".git/objects/35/22dec82be85c9ea936b229d24b5b3536d7a2ae": "bb0e00eb2597522575ab8765fa27750c",
".git/objects/35/39ffccd5a1a53cf41a05d2729b50c64014d923": "3bc8ea82c011a2f6b4498af4b51e7727",
".git/objects/35/6d7e956f436c944961e2771b27311f27cc1e1e": "87642e949452acb3995809cd1483c817",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/e7828c5b88a4dc6bebf2b42296580e8e80dcd5": "d6efbee9289cf30fe4a3f2d7197899fd",
".git/objects/35/e8ed72fc0fdba66bedaef87ed07410bb6219a1": "5c2ac97e6b372bfc878652fa9f1025a7",
".git/objects/36/761a9ba4e9214d514e2de777640fdd40272650": "ff9e85389054a8bfad2c7d42f53c94f9",
".git/objects/36/ce1036186da4e67df37465d2530eaeffa2dcc0": "e28c0ab4a1eb3139b93f76a9d10baf7d",
".git/objects/38/514dd717b4053e5ffc9f7dccc777acf8544b03": "c71b73bb457169ea6f28329dc52ccad7",
".git/objects/3b/582ac8bb4e675e03b2dea7dce0ae3fc5dac5d5": "ac67bc30082cdb1e79ab546ba9201e0b",
".git/objects/3b/dfcd719cc8e71d891436e705317d73fdc2a313": "8271474d9c3ac8a337f667692ebf1ea1",
".git/objects/3c/757253e9048e2b7bd79a5b826ddcb25c295b8c": "18bb5af9bafc105e698605f68e6a3870",
".git/objects/3c/d2bff996ce5cb6eb19764845b1d6909e70b99f": "4e32e3366518e6444a20903db3ba8fec",
".git/objects/3d/92a8d595d41e29cf733da7de3e4927a8b11a54": "b8a57554ef8f8ca526bd42cc0d988038",
".git/objects/3f/d379f9858c8026cab4c0bb43a2957316e38270": "da486419dad49da955d965c6a690e487",
".git/objects/42/53f7d52708bbc7e1136e661a9719e5a9c122c1": "822b41f556502b68e6025f05fae0f94d",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/43/92fa88c5b47de40817b4b0d7913553488490a7": "c27c7fabee524eb9a1c531deabc55ea7",
".git/objects/47/092c92f0f0fa53b9047c4799d763232cc90877": "70c2af583f7e39f2a7784bb2abdff3a1",
".git/objects/47/a8989f419a5c9302f5285eb389db36cc0fb90e": "2d4597aa7ef95f6017f1390392c0d165",
".git/objects/47/c2e4651aa090845375e3aaf1719167f3894455": "1c17c26a720eaf217a539ed6e438af06",
".git/objects/48/821401b5622f16154754aa9b52110c6cf2d480": "ab55ab5f3860a5c742044cac36507325",
".git/objects/49/b4b91d9eb68f3e30344eb6fd611b52ef6b4e1e": "e856bd1b1137730e743fe65d49977307",
".git/objects/4a/2c23f80590a87db4543f3ded586883432e7151": "dc185e61e5861fe297a1079b69135bd4",
".git/objects/4a/cf3f34eb373b8d8e5b3350c837c556cd37d7d3": "d1a877e9f88e29f9deead8020eba0396",
".git/objects/4b/9853a395653f28edeb675f2f8d1950f41758ec": "de345753d02c414995a1e7cf4d54d802",
".git/objects/4b/b821ffdcfdde6aaecdea9b1bcce38041dbd354": "1975bfa6b7e8473e2b550446851f1be9",
".git/objects/4c/0fb0306dc1f2c9e864db5c31270eac66a7205f": "83a032dbf6a5d671624264feae30e6d8",
".git/objects/4c/16a3c0b060f0d057c9f29222dba4d9cf610f5c": "5bc61c1f7cf6e7aa66a039551663c128",
".git/objects/4c/f19192e43d82f17a9dd8380f8b604ddd8c0488": "7e4b29a881c2739cfd5e24c7918d15ed",
".git/objects/4e/1b5e9c2bd16d54f7ea52cb46e3b610312fd6a5": "2a30a2239866bfce5a9285cf39466ca6",
".git/objects/4e/1f6d104907a3f437bf4ac0d08c0cb10c538a26": "d2ec8ec2137bc0f7c1bfe8dc9b3dda2c",
".git/objects/4e/22c635c7f8f3b779e6111d9abce4d11b8aef3d": "278b2eb69090c13cb44371decf91132e",
".git/objects/4e/26b67435db6736025c7de383073f34ec3b08bc": "ca216560d58c7f1b532c11dd6153ee27",
".git/objects/4f/ec6cbf0cb929de8b34a68a2bbe07082a483303": "ae4454f176099bfffd12c3713f36928c",
".git/objects/50/0e899836d7695ea9746d0ff45ba4cfa475e03a": "72f203a931b96b2ffb517072da42a4a1",
".git/objects/50/113538e27c054967e804e70c07243a9924a78d": "5221ce9d897dfe4eec6aa919569ef36f",
".git/objects/50/eb459be47874f26a3637a3e666675bf742012f": "d9cfce4ab5f068fe3e17f2ee5d263885",
".git/objects/52/63c857b90ede0adaf0df992d18a06c4a32a097": "3ca2743e88b94ec80309b593db1a855e",
".git/objects/53/23eb31bd29431d5b347967609d4f6242dca1fb": "213e96760d602a14176cd67351e0e1bd",
".git/objects/53/542d057fe9d82dfbc04fed9daa8f8e2e992a98": "31440a50aff64c005c65214a7fabc577",
".git/objects/54/03a4b76e76480aee6d54bddd067c04ac0eaad2": "62a82e57b417906bf20d647c703c05de",
".git/objects/55/736fcdfa224192fb558b8f7b8d6b10473aa481": "f3f17cfd05311f7ab876d225537d42fa",
".git/objects/56/525a73028a455997e816cab375fc03b85e4a78": "754b2cad03e920c8326ac6c56ada596a",
".git/objects/58/2ce0e72c3ec764eeb813fe8e0c7879a2b52a39": "ddbcf1feb9fbd1257138ccfff46380a2",
".git/objects/58/f3f2cbb07a92c3df59f83b01d4f49371672c91": "46c5e07dbc57a437993bf3d0bb9aa1d6",
".git/objects/5a/26a51c22933ff95917837bb3726ec0e0ba16df": "8c30adfedd23497587ef4286510f4734",
".git/objects/5a/32c372c49e85feaea842d9ef5cd57064de514f": "817e5f84f9f1eff83cda91dfa966f585",
".git/objects/5a/a5ed4300eb428bd39252c25f78212c973334f4": "64eaaeb39e763d303948994540c3c078",
".git/objects/5a/a6381017ba86cd7d8d9c3c03488aaeb11bca1c": "88c6d523dac794e81a863eef6d54a53a",
".git/objects/5d/0a48b7e857d46e41d5e97c8034bb06567870c6": "da716920de5c2bd7fbae2c608a9ee6dd",
".git/objects/5e/450b135989b66ad86e54d9abe3d1999f559f7e": "661e27cba518604cac7dd3c4f3a91dc4",
".git/objects/5e/9dd158431accc44f8106fa784f3823bffd83be": "551a4b22cd5dee1e8387aa61cc32eb37",
".git/objects/5e/ffee747467e07e2e85d6566406ed82ebf20e66": "c3d45acc6bce2bc9595684ebe18d5516",
".git/objects/5f/6277bb5e5dacd5240139d0c53a4190b113c56c": "e2af36a7455da08bbfa329878e5f4bce",
".git/objects/60/7ede2b1d787aab051f50fbcdaf6e56b3cd016b": "922f97d15cac3cbd3adea42bfd1a2e0a",
".git/objects/61/98ef2f40b314005ac114a160e9079ff6b18cb0": "a966e0983e3e50948ff34abb4a38fa88",
".git/objects/64/0217d8af7a16e5fc81e9d4dcaf20208e3c5ab1": "40bc96de0bd61cd7a8b1efc0f5a519c5",
".git/objects/64/5120121d0e3505a6d57062d8378af9b7213cff": "6725a8e70ec926b35d1ba3346714bf5a",
".git/objects/64/6423f379d9678bff50b0bbc5c00c13823a1cb1": "7a44a7b91314aaf121ce6b092e99ca30",
".git/objects/65/a08eb9fd6b4bcfa2e9e25d135ee7bd93ded690": "3108b0ad2f669297d5a1af17df11711e",
".git/objects/67/abfe87022d4be92a8334c24257ad332eae481b": "7e67d0bda82cfcc00e0dfa5a511c7262",
".git/objects/68/6e020567878a29c6d10ddd1efc31a9b5bf6cb1": "cf4c85d49f82972a155a7a55279c9260",
".git/objects/68/f6266fba6592d704bd848ab5431c7062c9954e": "88b8b3e84b85f7a57c68d9246aa7a36d",
".git/objects/69/e40939f47669bf9ce40ad137ce521744181889": "bcbe8ae0444ff618b8acd09265b39e2b",
".git/objects/6a/440836d49ff890b38deac1dfedda62d11bb812": "2d300df18dd78213c916a8c1c559fc96",
".git/objects/6a/791af3f1642b8f0254b314ad01d10a475abef7": "9142af8fd2196b3ebaa7b10cf60acb66",
".git/objects/6a/8a51873906325c46dc49fe4bf65de263fbf91d": "df70ece8ebe3f45d62c9ee0cb8303f57",
".git/objects/6b/33215cdeb73708ecba183460ea505b7c160184": "f84954effefa835a1d14d071dd46f792",
".git/objects/6b/8214d2f24a7d0cf3e6739abc4cf1b756bf21b8": "4346e872f73ed1571c74790117713d2f",
".git/objects/6c/84cc2cadcbe51c15a7771aba5ea86b7178cb79": "9bbfec9a2626537caf4c75f468d03519",
".git/objects/6c/99f05c33682878ec0c7c87d22f61298cf94b28": "4da43e39bb8d0db7020df7be7259ab7f",
".git/objects/6d/329ed847c32d24bd531c7708634fd22b5f5a8d": "3a424eaab7ae97f137a82b2f38d1d723",
".git/objects/6d/acd0b206ee056460a759d7e5699b682d56c38b": "c74eba7f88f157893f5e11e05042862f",
".git/objects/6e/8915a591fbc3f712f920af6063e73f4330feff": "c5ca2a47a6e398759b3eff469e4f4baf",
".git/objects/71/87592c5a509d130fc2981a833e9c9376f41908": "93e5c51d8ab60c1f931a4821e8c1db07",
".git/objects/71/cd02435a991b80db7d1fcc8d25105d2474118e": "8a8a48d569bb94db0a74e45033b2cee8",
".git/objects/71/f3be938aa4ff0057713676fda1fe1e46f2fb6a": "a9f4c1b85891f571920b10e01cce1eb1",
".git/objects/72/493dbd67a27f5c9c5209ea21c895a6e5e6257a": "9cbe331de36fe16e36a0f1f5003772a1",
".git/objects/72/72008b1d318ca6d642a2bc2656618f6b75a461": "84c9e2794b7f94daf7e0c1f04e5b1a32",
".git/objects/74/edbb50250f4314523d40440dfe05bf4b755f8f": "59958a492ebcf33e53b4917c4a7c4352",
".git/objects/75/074d14504f2a23761593e8fd4cf37a92d6ab49": "ad8cab66bf2d1a8f9015ff58429baf03",
".git/objects/75/db66f21ca5a9997bfba6abe6db77be3603d1b6": "90d412b77819bb0c65aa3f2c4edafb61",
".git/objects/76/65c777536bf76d7595e590667fd068c50e8083": "2165bfac4b30de5b54196dd36f3727d3",
".git/objects/76/f35b709f024c389b1bc68455f43fe16807bbf1": "8b812e700fc390b2748e5b9d17c49e47",
".git/objects/77/106fcf45f0798bf7df0946a08bdde01a57db02": "02bf824f62febfc8261946844c109a06",
".git/objects/77/824736a8ebda6735b7ef19743ecba19d7b02c1": "fdce549bac45b1f4fe2215b4f26907b8",
".git/objects/77/b0dc9960f5bc1e05405aa30c0fc7ec54a0e177": "06969a7b71ea49eb15b042242bd830b7",
".git/objects/77/e2cd2c91d1390874ec4af22177cc846c1a44ca": "6553c9f3df55f4831ef90789f946954e",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/79/69162474b9616cd58439df30847ffefa78c81f": "8b6368a759d9e923d682db309e43768c",
".git/objects/79/b7323ccf68c7e509e14c4ad6ada69e13ed4cc1": "97557eaa51b97a8261512468321db6d6",
".git/objects/79/b93e5525e46d411953e2df92f01f7be17325fd": "29ec707a0d4f4d34a26e4ff83f76be76",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/0af2eaa5d18ea26d53cbc994049a6dc2a40980": "aee3e11b76200a5ee2d86b4099a61116",
".git/objects/7b/5894573e90e0c73b2991794aeb39911005dd6a": "c9fc2c0c0248d30f68372a3872c11dd4",
".git/objects/7b/6c67b34ed95c6ad75d039414f45824a70e1a67": "70ee2f373752f7b769f792b23d762e0d",
".git/objects/7b/9eb90c1021c39fc89235808a2305dccebac44d": "6cb94b5ce2cfc297d0ecda20aa893d65",
".git/objects/7c/0b8735ac2dee4b1ac207690ee9eb08fb1bd3ab": "89c8d7cb9dc1b7b8790d2e2a536f5ad1",
".git/objects/7c/9e9438bef5df2f72b13400317e77678e91d3b9": "8fc0c906c1fbdb71239dbf34fb0df5fb",
".git/objects/7d/35592b4c2968b36ffa545e770ba308a7542ff5": "c1c6ad86c44d69fdac857bc9ea2cd748",
".git/objects/7d/76094eed3cffa8bab1ddde55a1b257e8946b71": "ea518e3f8ce671c84cb3b43d5808bbde",
".git/objects/7d/9d3cc270af215e0214f0bcd15a67511087fa58": "2fd31ded427c8bf339575741875a1cf1",
".git/objects/7e/82ebb70643b2160d4320d28991fc7283567332": "685d568f280931e235ff78c8cb45d814",
".git/objects/7e/9ea858b71bec29faa8e9fa794a986621f14e29": "399decb63cd21eef3a81c565b99abf49",
".git/objects/80/2894239fda8e8d33d666a9bcc7a57bd968e598": "77eaf5f81a0c61cda155207389ef9132",
".git/objects/81/0ca8fb69430b9a4cdd9d9ebaca1686ad0016ee": "14e975b3fbb38ecbfba0696ea184ef37",
".git/objects/82/8ff62cd8ea86c5640d65086cf592c95339e86a": "9337cacdf25ba75c21c89be82e123f41",
".git/objects/82/eb93ebcf29e197fbaa7bdab5d3c24ee0ddc18b": "0cd37233b4bfcf00f9ad183809b9d8f3",
".git/objects/84/aead7b5a15e932d168fe3e794fbac8a4041af1": "adc234b049da8ec77672750fbc831069",
".git/objects/85/cd49f89e09d123b3ecffaed76528c9ee2ee5be": "52870067a23121d031a72486403c111e",
".git/objects/85/f000b9abfafb4bf63448ad6ce7d7e03b733241": "20a07b8e671d3e840f159663a6181ec4",
".git/objects/86/175052f252e86ca6256ae0e7f53f2e225f907c": "a1b9b747e616fbcd89dc46436e468743",
".git/objects/88/015fd4040f410ea5eff3e8452ecddb6453b955": "cd94b5c4fe0b37e6bff04bcf5816f42e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/16b2dc0a075b6bc7afc1c1eb2622a4272d031f": "73e1b1f039208329500a2cbaca8e0b70",
".git/objects/8a/43f5615cb2a0376f36ebdb7f2d6544a3791a47": "03a8ef20ab09da6ea5573d48f6b84e03",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b804520df706bda4d13791e4cd81e67e57fae6": "30319f4698695b1f182bef5ce3d7dc0c",
".git/objects/8a/d606ef6762c2de2f674f1dc740a3c81912f46e": "85131e599ca394e89cdf27b28acc3f44",
".git/objects/8b/28300c2bc3bd6c09b200d87a1d8c8156968030": "632e265f8a0472cbafcdd726d644488d",
".git/objects/8b/a6421b90ef7012e2c8c73e1e4afe92a8648d95": "993d570c491b0b887d4c356669b93a52",
".git/objects/8b/e68a72f80c1755d67f25a87690000b2529ad9d": "347cc29a7f6100f0b56251d251d3ed5c",
".git/objects/8c/27e564393a5c7ac034d0437e311626dec48306": "d68c13d7707a1084d72eae681f844cb8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2bf8b8e1e33a92c07a536a7c753e85e3cfc9a2": "52de69562d7b64e4b5269d0ea5c22bb2",
".git/objects/8d/53b487b2a350fcf73d4251f4843de52d6232eb": "3eb15a0b7195b63e73725c7aeb972178",
".git/objects/8e/238597e2be9ca61751eb4c32aee346b495c6b9": "ffa7e4097e4f3fff8b14fb11d2044aa3",
".git/objects/8e/6b50bbdbeb10bf721f990f70ab7f5c788cb392": "0da90d9d1b9a4cd78dab8bc282e24c94",
".git/objects/91/6acc72163c83273be6616366f1f90139cc318c": "a7418d6ffeac959ff8df8a41b84780ec",
".git/objects/91/7d365cb8ea23a15b358b70d009d2772aa24811": "6006a8642e8f01b25a8208af740cd02f",
".git/objects/93/555c89db6d929e832b8289a405d6d631360792": "c917468b0aaf9fe424ffadf8514586f5",
".git/objects/93/c17cf483d7902d9be05f7e322f86137d7346ec": "f5ac793bcad81c68c0b6ffaeb0fa2fc6",
".git/objects/93/eea2bc5504b8942a46fa0f69091d4cbabb4602": "ff88c7efccd1f3438a7f59c3c6bf6895",
".git/objects/94/c767aaba823fbddf12cccbbc5be4237b979da3": "2dbab0977e614c3ec4e2548d7177c6da",
".git/objects/95/562267096ea6f8d367f8377682ade6b7ce2dcc": "f109d5b1693b2fe75290b12bfa4be8d5",
".git/objects/95/961a0891d0a0d0cf02b90c157172c22526b7ba": "0142c50ee5ec51ed9e2721ec5ef56525",
".git/objects/96/6365d6f79cb1c39e000caef46f5b514ad7eea6": "ee811aaf725c6105f7295f7c26498c3b",
".git/objects/97/597ee8ccb24c83d2f782cc043a6de01865ff92": "4311e278debc3c3982cbfd9a7b8af8e7",
".git/objects/98/742eb74f0872325a089005fce8e9471957800d": "c87bff8ca06125075c713cacbee834ff",
".git/objects/98/b0847898d255595cb8109225ba6b3bcb2e16a1": "c1f33bfd79f582f4ef94a99440cc641a",
".git/objects/99/65c3003ac2ad58cc925c8a2b17fe2d0511bb90": "44f9b3c8f393d95e2fec6f69a74d2ed8",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/9b/55c0c61ce68be036d20e5d4afc107d32b76eb0": "d8f8128bc9a300c48ed21d5d3ed8b579",
".git/objects/9b/844e90a5b4f64bbecb6261bb68652146b49453": "64e3a56d88757fff4b41ce740e862dea",
".git/objects/9b/b51cf0c852ae049a7207db819033af95096558": "d26a8e92b51d285b16425d22849bdda3",
".git/objects/9b/da05e07d908e2b64351e7d67d39ad0a9da4766": "00ee99270eb43fe4fe7c160444907099",
".git/objects/9c/2109aaaaf71682a89eb64ca08bc1f7599b6229": "8fbc43556801930604367c0518ba90df",
".git/objects/9c/c1a6f50310b758422621655676ed98f45ad3d4": "57eb7d8750f2e092b4d6cda24bda316c",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/97cf793e544ee4f5eb1daaa640b0bc1c9088b2": "1faf2abf2ee7bfa7e5ac553127566d3c",
".git/objects/9e/a9a142ba02607dd8ab58ad85fb817b6eeefedb": "d1720171d5ef57e4c6713d23f7b0e4ce",
".git/objects/9e/b7fb19c5ee722c595d2cc0dad06e845df4d107": "6610f5f55dc1b5dfb0deda265a13f5d9",
".git/objects/9e/c65e3ae8e47332028e6dc9f514a34afedcf720": "2b65edc67e138719758f2444916ab0ee",
".git/objects/9e/f60d415d8f5043aa1d227ab671cf14aec59e77": "bd60508ea3ea2ef7b5dbf63c65ea50fd",
".git/objects/a0/4231687e326788ad1067426602fe5a501031eb": "ae163ef24824d74b68fd8c056f31fde1",
".git/objects/a0/9c15d369aa6474ea9b986240f515ac71e9ff59": "80fec07db19129f0f96db4c2f76224f9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/36cb65e1dbb62489b53f46d035d3b1839913b6": "c97c2a816f988fc136e931e2365c553d",
".git/objects/a6/6d47bc1da144a4c80dc7f7509f93072d5887bf": "b624796fd85a94d2108f73f6050a1e75",
".git/objects/a7/84b6f5c81a2971eca02d49bab934cd27950bfa": "2ca7631985c2d428522bf1c54d6d5545",
".git/objects/a7/a190aca023e577b30a330aed5fec1410921ca2": "704b2cb8c17bec91dff0e5d52a112691",
".git/objects/a8/a380b9cbb01a6c62316312a0247ad374260219": "8e95d769d47605b65bd104c09ffd4de2",
".git/objects/a9/7982163c9feb63e4c99a1905635b7da1adf440": "b44ce85040ffd5dd99351bf81a628f95",
".git/objects/ac/e969996a74282c8e99de9fea14ce84408f435b": "f714facb28941ff6fa9b174df7c5fa4f",
".git/objects/ad/d3370ee9ffa78241073ca8d2057d45814e5181": "712cde6863df22553fa81bf643ed6a20",
".git/objects/ad/f2be357ea6c7d99c36e6cab4e73853db393825": "d3f9d22fe2d330e025c3eaae4e646595",
".git/objects/ae/4d8c623867a979dd0bcf3ad0c13ee9835a800d": "eca36fbdd091af60785854ff8e264e36",
".git/objects/ae/abc76179f4b08b5fd5f49cff2892b41a5a058b": "bfa8ddccd2c7f946f92a591705bf8c54",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/b0/8a33a3faa825e50b9a2ef2b996ea126ea3b389": "b56396c2bec84337bdffe9248d96bf0a",
".git/objects/b0/debd05b0f4544776a1611015c0f4945da59722": "5f84f78bde8d69da3e2931f7b122d6e8",
".git/objects/b0/e3556980041f31b6e8bbe74c416acdfa1b9163": "49d2728bf76a12c88c29003e110d15bc",
".git/objects/b1/23624cd532c2ff942e2a8b81b756049e375ab9": "8c1c392ebf8ad2dd2ac4793126293ea3",
".git/objects/b1/9716deb94462df477e1721f19e926638a4cae6": "97772a99a8b173de0f41f8c1378d20cf",
".git/objects/b5/28fb6a45a495f1b07287fd863409c15a24613d": "030d442ba83e26ffa24b964b590d93cd",
".git/objects/b6/1185a513888f6cc3f7cad48be3551c5f7e5e5f": "448f41c1d622241b177861b3bccc888f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df43162495fa30fa96f94f5677067a0173c3ed": "fc28150ba6ff8af6edee2f3f89f22278",
".git/objects/b9/253d76c1a0c0f5611bc51ff8a600023b369406": "e0f187ae82754b17ebfeefe8622be94c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/f8a3d3a71c41b84a28e75b63514d994948e4eb": "27fd9cdcd0aded9a1bfb0ef10643b97b",
".git/objects/bc/96e55c21e41136ca2dfd23d94407f4903ee4f1": "d5a16fdfea8182146795fb177d39a442",
".git/objects/bd/1d618e1638ee6a498ca2c8b427087b15f778e0": "ef357a9ccb6d7b932b60cae9f4bfa152",
".git/objects/bd/e163a00c23980ed31d41bf6b100a38127aca9c": "587e8c7fc8fe64dd18b7e06fed5e9c5e",
".git/objects/be/85db57d2cd0699db2c33e941b605b6c294a4dc": "fbc5ab2ef2b6ddba8ed6713aff12b8e8",
".git/objects/c1/20fdb51a1dddbc54c077be84beeb70d8285623": "f1f69234d460369df789fdb5e2511e8f",
".git/objects/c1/3bc56e93f4264cf160848470a82eec395429e0": "fd4a76efc469b9c224c2d6183ac1415b",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/3043979894fe6064b581ecbd7b5f21f38573de": "a1e404dc418759158e3d096bb2ec49e1",
".git/objects/c4/556c1050ee59b9d70cb8916a73453d4d43886d": "523d1906d18e6b4a0015f0b0291ababb",
".git/objects/c5/0884cc0314d1d21450109e888c8afb901e0ec4": "53ab907688e5d8f7749942c4d12c95ab",
".git/objects/c6/5c1fc1399112a4896efc7f6007e2b92c66bbe1": "bf18779c64b35ee6b6adcf7821da6597",
".git/objects/c7/068989e21637f4247501e16adec0fffb6ef4f1": "9b7cc5ee309ef93553172cf34e47e686",
".git/objects/c8/0276a1bb7fe0c47ebce664ae01423177ea5441": "83f929eec6c7ee59cd111457353fe631",
".git/objects/c8/17ddde7c6163ccc26815a0330ffc3c330ba143": "20398aa2a65504fa6436d82b0bf58e56",
".git/objects/c9/253411eab8f39d7000d1b2afd15711092e0bee": "1a5426f01e2289622e3e76c8877b0ff9",
".git/objects/c9/2d07effddaa46baadd77ede1e04b02229915f8": "9c3211f465faf6b833cdb406751f2a88",
".git/objects/ca/51cc7ce968557b73a05d1b6310bdcedbe14f14": "e15e5f13bec675ff60b3a84a15fcb529",
".git/objects/cd/154b6cc90d055faf4d0cb15f4dd617c96691fa": "c484f73a9612a3233d999110df9bdb06",
".git/objects/cd/5cc5420c203dd771da7ebeb4618d71df419a56": "6670f6a3fb5f685992587c10a947d247",
".git/objects/cd/8f78a04b80e9d7a1eab75502b5a09ba2e3eabe": "8346e7a97b9cefd48dc2fbce4299dca0",
".git/objects/cd/a46671ccc6388a073fccd97157a903d57be008": "92180c5ede4253e4bc1ad540f4001c16",
".git/objects/ce/35fbf32363e3587a9e8417d6c56f87a0edd77c": "8955dbdcaecaf7c5a401a0e1c5efe160",
".git/objects/cf/114b65a4ac3ff7b485653aa7d73d13b97910bc": "f10eced7fb63a5f1ef4f99dbd1577799",
".git/objects/d0/e05c0be9bf6e846fdd9e22c4183e8ddafb443b": "55c281836fb232d1209cd662419781f8",
".git/objects/d2/632f21f31dd8bb512ec1042b116ecfc561f625": "eeee72f622e4e158346506b963529b75",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/2cb4d1ad47c5353e05b223cac55b6fb91a2176": "58eaa7ade45dde94bb6fd6e22e211ad6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3661f06c39b825c289c3bd6d801f45486ddd44": "1ca8b2588f7dbf2ff5d9d731a039b69e",
".git/objects/d4/57368c7f46f1500ac742a2b9fff61714834f87": "7309d2571a411701888ffe1eddaad52d",
".git/objects/d4/7bf1deb64fa619adf2c5d4d97adcfe8b6148a4": "424371fa7af6bacb86b4efae6191d041",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e5060978329dad059dbab0775ae7c8766313d8": "090ea22e1e0c41447959341d37cd2500",
".git/objects/d7/26d1f79bab556be5ffffd71c1580fda336575c": "60b1ea224b5cd7df9f0de1195a970578",
".git/objects/d7/97d40747b462df0becf8b02d11204ec106cd75": "5c02a0ee6bd45483efd2ae61dc7d2085",
".git/objects/d9/655ec5a3c9abea8ca930e10e81016b90ce6db7": "8b2e6281ec163ce1a95e47c94e62452c",
".git/objects/d9/7a59b646f898c7a1ad6dfdeb5ba5f5f5e0fc04": "9b8131e539821d44ab41e8ef0e04dbe6",
".git/objects/d9/fdab9d73d281ad9175411bdb8befb8d11be796": "2cc0938d67e450edb8a2bd712399e07d",
".git/objects/da/2d9f82a2f57d0c2517c80339dc272163fe8c49": "c6483c2fdb4f232625ce1519aeeac773",
".git/objects/da/f57e3b97a0f82232c8d85c96eb0dcdfe8df782": "c11872789b965474e012ff23576c656d",
".git/objects/db/8c3461b4577798b34b26dbff09ad015e401fd8": "f6af3e7a8dc13ccfebecd309dabefc77",
".git/objects/dc/2987a2990a676d9224ac040f3245458610f8c7": "5490700bc407c0a108fe431246c4831d",
".git/objects/dc/46912f4d8378a9eb791f7be282f5d349d14103": "80f186633db8bfb579b65e604074ca43",
".git/objects/de/e2c2748d21d847b2b8a67475a2217c2920ddfd": "0abd9a2ca43a3e20ee63f1144a4d6366",
".git/objects/df/38a87dfa48bd3d155de5ac4ad1624516f2745b": "7dd8f9b86328dc6694c7441d44200273",
".git/objects/df/c84cd99b76f1e7ad7d1a90a543c6b777af1666": "0324a5172f9c679e070c121d479d99ea",
".git/objects/df/ca9ad642b80321983362380100aba9cc1a3755": "634e7324089d37a24893d6c1be2b2677",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/0d528ff6ddfb7bc5aa5457aabf6b456d2e3c90": "70b4d55a02252a8a92a15052ab252b9b",
".git/objects/e1/65046fe15a419d3871852a28c0cdd904938389": "5404d323bde800654ea2983b1f8fcf3a",
".git/objects/e2/8fcfbe6dc51c470a015c776c175cb9450634da": "61f28a0228ad3565c81c055e4a25472f",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e3/9b48643b5981f6ddf58dc38286d3fa2960b8dc": "00995b9ba730399baa0575a8275a0e5c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e7/fc2c465ee279f2dd796c47b920a893788583fe": "9e525a400e99214be14a8cf870d04bd5",
".git/objects/e8/1969c92fde6279af86890116a808bdecc9ef09": "67cb9cec7aa5057c1d8a567af6b3b4ea",
".git/objects/e8/1cf073da17765ae834978a140d74d9761430fd": "eb9be6df8209f139fa7f0374f7bb2839",
".git/objects/ea/1bce4229d02fb90e60ddecc61c3ba594af3f24": "fb18c16c4bfba6f134d8efa6b43069e7",
".git/objects/eb/516c9f1bc40f45f4b4b2b932dc9e3dc66449bd": "bba7d5335a932622cc35773ebb220973",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1839cfd85bb4e1821e6aac5392d71e3f891ff5": "cabf3a20a61655d7473f0a4d761d2dd3",
".git/objects/ec/ae792ac459741b539e500cc57bb72f051a1a27": "b0387502da2ca214dd7fc868845ea518",
".git/objects/ed/27966dfd82e74c7e19acc2374e8958e07a2430": "deaac50c4ee168b1b8de737bccd2aabc",
".git/objects/ed/9e0f1941ccb9e37fe08cd47800a8756f44a271": "8a2d141c2ce2f8744cf2d3dd81f7d979",
".git/objects/ed/acb9b5ac369a433e9d0e70fb3ca403e070e0c8": "ec4d466372467359c35a41860d1f8652",
".git/objects/ee/11a54d13e25c64f1f48346771e1a76ffafe6b5": "898075c40b5144b7427978467f5cce07",
".git/objects/f2/0bb44b5a525cc9b69fe169fd4f85570015f8bd": "163f1beec55c4c1438c1443a97c91c14",
".git/objects/f2/9e9abde13a88c941cd02ea903b5e811ba61a5b": "13c664e94aa80da1910323867e84b687",
".git/objects/f3/3fe0416219c811abaacabbebe15dfe0f1fba01": "0e58205cd2d2a988c3e79b94b21162f3",
".git/objects/f3/b53f14fafc773df6b579b0abe93de1c866fde2": "3856fa613fab1abf6528990923da693e",
".git/objects/f3/c50c2cf743fd329e6d30efba58d8db6d7b708f": "af3238c3d21d41ea5809d317f281b990",
".git/objects/f3/e7be754132da29080c69f0ebb68db636438b16": "2023bd5c6ec8445a5f8712b1269aff5b",
".git/objects/f4/1182391ae902d4990b93b6f7ca19bda9234446": "9d83550024927a32608d0b617cdd7520",
".git/objects/f6/1ca0bb02985546c8760a95a42361739a7f919a": "7147a27ef9351319aea0689ecd206f57",
".git/objects/f7/cecfa31665a05c7f03fa90a062752b074a0db3": "e10681603d05cc9eca07a4b8b8549938",
".git/objects/f7/fe3c4d80beca83b4f51e8e2011298483ad5072": "2d441959d136551fb8533ddbed019d16",
".git/objects/f8/7155e070db148c1c3b7fabe610a34f866a5f9a": "0da55f189817f23a97ed73809cabacee",
".git/objects/f9/7d7176118797ec5aec91a7234d00aa735cc017": "a9513dafc55cb7d229a2315105069882",
".git/objects/fb/0f0843155dc5a80c152e9be5d87ca75e9b980a": "d38a6e452babca3442898e4cc24b5dbe",
".git/objects/fb/b4150c3884e78fa7b87e54a159bcae0ab5f433": "d07dc366f79b2df8850243498dbea46b",
".git/objects/fc/2162e432f374bdaa2bdc84e4b1a114665ef411": "e97e2b92b7e3e116e127f7e37d5301b0",
".git/objects/fc/60d362b75f6cdcdbdacf948909e18d1e935f47": "0a7fcebb0b1e5a7e56e6e27f630e259b",
".git/objects/fc/ba5acc51bb854f58da16ddacd00948adec1fdf": "888f2c2f52d66eb00ac0c965ad73bd7e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/436ca09c43925720463c9860620e0f1a207445": "1d2420fa9b32f299f39f5abbb053072b",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fd/d03ddd8e35990d3c97f514178a790fc59c2973": "a92c0cc0922fcad1acdb1c6a32ecbb87",
".git/objects/fe/17642c6f90d856ae64a2e41a3cfe4c04b7582f": "0f495d7fc1ea6fea9757793b1942b9ef",
".git/objects/ff/1bcfe9766604b74efcf5e8209cb2e09d9c587a": "9cf9cf7f43ef6d786bdd7c08a4281854",
".git/objects/ff/9dea3c174fcd9f84a16f4e82772f9f6e8f8fd9": "5f41b12e6db4a78e9cde6bcd0462d3e7",
".git/objects/ff/f4b2119adea927abc6bedd72830e5915987ce2": "7ae522732e18c2bd2bd6758f12d8e5ed",
".git/refs/heads/main": "22314d0ee72444b8a232c3e4ae6d88e0",
".git/refs/remotes/b2b/main": "22314d0ee72444b8a232c3e4ae6d88e0",
"assets/AssetManifest.bin": "c6c5dc161a6fc3445e8dfe5eaa75ae52",
"assets/AssetManifest.json": "1db24c7b4d93a48e57625ceffcd21cc0",
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
"assets/assets/brandsdetail/bb1.jpg": "61f7cd2e7e0f39e86933e00f84348816",
"assets/assets/brandsdetail/bb2.jpg": "0d6474eb7b2f4aaf0cfd2fd3b3812f90",
"assets/assets/brandsdetail/bb3.jpg": "4828bea0198c9d1b9ffd95fb310fea82",
"assets/assets/brandsdetail/bb4.jpg": "62e64158f09246e96e985c99d8c3d71d",
"assets/assets/brandsdetail/bb5.jpg": "b5c33725d6c05dbdfde811a921701aef",
"assets/assets/brandsdetail/byredo1.jpg": "7f1e517fafea1ec8bc56683a5c87738c",
"assets/assets/brandsdetail/byredo2.jpg": "e20838a46968e9a29c68c512003af71a",
"assets/assets/brandsdetail/byredo3.jpg": "ae81b627e935c2738654a186c3755d4a",
"assets/assets/brandsdetail/byredo4.jpg": "9131536f67c3cf0a2635fec43429b355",
"assets/assets/brandsdetail/byredo5.jpg": "c50034887ea7808de2a29415b42c96eb",
"assets/assets/brandsdetail/byterry1.jpg": "472507f2f9ce2072b118379303a1f6dd",
"assets/assets/brandsdetail/byterry2.png": "3c4e130788ce55cf8dac08c581734780",
"assets/assets/brandsdetail/byterry3.jpg": "96d71b2ae09715e6b274c70f4ecac3fc",
"assets/assets/brandsdetail/byterry4.jpg": "cd616ae28e99fe1ebf60a30b1d6949f2",
"assets/assets/brandsdetail/byterry5.jpg": "7bd37e4ffa97732333bf314b41fede62",
"assets/assets/brandsdetail/dip1.png": "95cef0f0f3589c19fa13cccbbb7d047e",
"assets/assets/brandsdetail/dip2.jpg": "8c1bd92e515b9b24145933c493c36eaf",
"assets/assets/brandsdetail/dip3.jpg": "668b047cffc00c000e872eabc6ee1241",
"assets/assets/brandsdetail/dip4.png": "1d6fb25caef4b4f009c0396b4480d0cb",
"assets/assets/brandsdetail/dip5.png": "1b7daa0dd8c8b445a56086461b258250",
"assets/assets/brandsdetail/el1.png": "bc25f565a2700e9713fb499e841eafae",
"assets/assets/brandsdetail/el2.png": "afb0d42c3b04b398dd9a0aad45c12492",
"assets/assets/brandsdetail/el3.png": "ebde0eeca11e97b86646450cc5c36939",
"assets/assets/brandsdetail/el4.png": "e90a4d20b4bf1973877854eb7aef60fd",
"assets/assets/brandsdetail/el5.png": "5b3a71201ea46ee47914959a51f1fc05",
"assets/assets/brandsdetail/eve1.jpg": "5dd4af38176a4b7d6d18b980fae50eba",
"assets/assets/brandsdetail/eve2.jpg": "ee7a800ab50852bbb12e6cc924337a32",
"assets/assets/brandsdetail/eve3.jpg": "72b207882b16736672f871aaa1d38728",
"assets/assets/brandsdetail/eve4.jpg": "5ac2eb51e08797cc150d137af8a9b5c2",
"assets/assets/brandsdetail/eve5.jpg": "0224bee9bd09be81bed36ef4d713e979",
"assets/assets/brandsdetail/ka1.png": "372addd76d86953c097959e63d21b8d5",
"assets/assets/brandsdetail/ka2.png": "58f24bc94d414046125936b8c47b45d1",
"assets/assets/brandsdetail/ka3.jpg": "887a9d27a1f008357a429dbeabe62126",
"assets/assets/brandsdetail/ka4.png": "d49f3e69af25752e95400076d9dae721",
"assets/assets/brandsdetail/mm1.png": "b6efa44e2b95eb2ec12b4d3e7e34a858",
"assets/assets/brandsdetail/mm2.jpg": "7c1dbcd5db570918844c8f2213041cca",
"assets/assets/brandsdetail/mm3.jpg": "2cfc901c218ac9700e455e920cc730ca",
"assets/assets/brandsdetail/rco1.png": "7aa0f3a8f5f8288405bf03b4696d3c6a",
"assets/assets/brandsdetail/rco2.png": "6a7a72841d35b252609e2d68a2b20518",
"assets/assets/brandsdetail/rco3.png": "5955755d6b6b75d688c70c990afadc34",
"assets/assets/brandsdetail/rco4.png": "9b3018b295500e63bd51b2ca9b3964d9",
"assets/assets/brandsdetail/rco5.png": "cb4e130b660ba247b3cbf7ae304c2875",
"assets/assets/brandsdetail/rcobl1.png": "2a2a8d1667bf7e334360acf836e30fb0",
"assets/assets/brandsdetail/rcobl2.png": "7e3b53dfbf08dd0be78966591e83cd40",
"assets/assets/brandsdetail/rcobl3.png": "393dff65a9178f202c7df3f954469ac4",
"assets/assets/brandsdetail/rcobl4.png": "f77d773091d32a26ed87e6521b784b1d",
"assets/assets/brandsdetail/rcobl5.png": "f1e860e2ff24bee233efb609811d6806",
"assets/assets/brandsdetail/revive1.jpg": "56cbf594e0ee3be9ac67274f90ae78f1",
"assets/assets/brandsdetail/revive2.jpg": "9d0200236a31832988463d366ff565af",
"assets/assets/brandsdetail/revive3.png": "a263eaf9def8068f05e96184bd4d8837",
"assets/assets/brandsdetail/revive4.jpg": "21fde482011364f19efe3e8f0dd24aaa",
"assets/assets/brandsdetail/revive5.jpg": "154e68b281c7a0bbcf58d656e2687299",
"assets/assets/brandsdetail/rms1.jpg": "d7580cf4a6cf40aa0c20881b48590b8c",
"assets/assets/brandsdetail/rms2.jpg": "064161eda202bbd0d4b8b5293d0e5335",
"assets/assets/brandsdetail/rms3.jpg": "41f213ebde9d6700fa539eb7b8ff8a3f",
"assets/assets/brandsdetail/rms4.jpg": "0c57828949991c017c31e9a4545dd8cc",
"assets/assets/brandsdetail/rms5.jpg": "eb1d6ed35e91c572715da43dccc55040",
"assets/assets/brandsdetail/sam1.jpg": "f74b31cfd31e39459240607ca0bb7d2f",
"assets/assets/brandsdetail/sam2.jpg": "fd0bb02e951dd7b687e173ca018d607c",
"assets/assets/brandsdetail/sam3.jpg": "a70851c7b4ad87d297b9eb62269cd190",
"assets/assets/brandsdetail/sam4.jpg": "75881adbf58acc47e40c7549e0b04601",
"assets/assets/brandsdetail/sam5.jpg": "7804f1a9c98d11003d0f1aa66edc5ec2",
"assets/assets/brandsdetail/susanne1.jpg": "134f385e81bdd02db1ee34f7e82884ef",
"assets/assets/brandsdetail/susanne2.png": "7ad613bd4e802a0ea21be30ddb7e90e2",
"assets/assets/brandsdetail/susanne3.jpg": "6da62b5ec26ea8cee1b6926e770f4f1f",
"assets/assets/icons/BFS%2520Portal%2520Site.png": "e8906845e93a527df999060c58d0659b",
"assets/assets/icons/bluetick.svg": "7ee08e789dcb5177ae98116729a170d4",
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
"assets/assets/new/additional%2520support.png": "b17cba56e0a0b49b7ff960b05bd6e1a8",
"assets/assets/new/arrow%2520forword.png": "124b340f18cf91b8ded2e8602791157e",
"assets/assets/new/beauty-Spot.svg": "91a09373cd1869e44dfed92002b40b99",
"assets/assets/new/BeautyFashion%2520Logo.svg": "f8eaf1393e1533238e755926f8d5f4f8",
"assets/assets/new/beautyFashion.png": "19cb938eb227280da4a49cd7a1e41400",
"assets/assets/new/bobbi%2520brown.png": "4907834831635f9aed93c65e3ecc5296",
"assets/assets/new/Bobbi%2520Brown.svg": "472a0d72558115c652fbd4f24610a52a",
"assets/assets/new/Box(4).png": "83f493d4a0fe8cd762eb17c5e8bab0ea",
"assets/assets/new/contact%2520us.png": "dae355207df619608075d3d5752544dc",
"assets/assets/new/default.jpg": "29e298d98dd1d0744190f12619653717",
"assets/assets/new/face%25201.svg": "f30aa6c4dd8e9ec3511d0c0529a2ab82",
"assets/assets/new/Girl.png": "dacffdcc02c16d53a3287353605e81da",
"assets/assets/new/Group.png": "62388f7fa78f9f14c9823a394183ee40",
"assets/assets/new/image%252019%2520(2).png": "9a3ef9e9b4446638a73c8c1319ab5a5e",
"assets/assets/new/image%25206%2520(1).png": "f56e8e9e7245c8e3065dd32822ba390c",
"assets/assets/new/image%25207%2520(1).png": "aa900f1cfaa24a57a5444b4632a60ed1",
"assets/assets/new/management%2520Case.png": "24a346d5761bfe21990e0296daea07a7",
"assets/assets/new/marketing%2520support.png": "196d5187f3a252f75214ecd6421f9b02",
"assets/assets/new/Message_light.png": "cc6d3c0b75de91018db2e9ce0129c2f6",
"assets/assets/new/order%2520status.png": "59723c3530b9a0b3a6437cda587273eb",
"assets/assets/new/product%2520verify.png": "9b3bf46dc6642d897408287e029c4a67",
"assets/assets/new/product.svg": "90e8e7e75e2f630898f9c241cbebda03",
"assets/assets/new/Products.png": "d9af00590cae89affb291a5f7c3d89b9",
"assets/assets/new/Rectangle%2520116.png": "6b981c7181969a585b1634e2969fd5fe",
"assets/assets/new/RectangleBB.png": "26b605c99c6d2e55f36e63a69d36161f",
"assets/assets/new/revive.png": "2c6588d79dfbea64050a29cc94763fbc",
"assets/assets/new/Revive.svg": "912975df649b465aa7b59687ea09074d",
"assets/assets/new/Rms%2520Beauty.svg": "e9bea7765814bb0bb49e37db6495945d",
"assets/assets/new/rmsbeauty.png": "6d6bd1926d2e9aa776b8a4ee9f736410",
"assets/assets/new/thumbnail.png": "ecf6008c984be17a80b65b7a0909947d",
"assets/assets/new/thumbnail1.png": "2916e58b7e4162077e7c24dbdcb786b6",
"assets/assets/new/thumbnail2.png": "213e18dbe8d8baecef19847499a7dde1",
"assets/assets/new/upcoming%2520product.png": "60f8239981182c700bb3f54d5d0db171",
"assets/assets/new/Vector.png": "67cb2e228f9a1ef24cde26c5573bfec5",
"assets/assets/new/velom.png": "ca0257480448bb2ea7d57daf93ede8e8",
"assets/assets/new/VELOM.svg": "49825b117fb5c45bb08143ad4bc9a91f",
"assets/assets/new/whatAppIcon55.png": "590e880876dbd61f2a3f8b448952845f",
"assets/assets/new/whatsAppIcon552.png": "5b27d167cbc8cac2599bc3d299d7974c",
"assets/assets/Svg/delet1.svg": "0c6d7dfe2264d6725c1dc5d61c08ce2a",
"assets/assets/Svg/Downlod-icon.svg": "83619685208a3027c55c25b1a294f346",
"assets/assets/Svg/image%25209.svg": "c24dcbee1c4753fb9ff7d317d6533ad3",
"assets/assets/Svg/list.svg": "4abbd1d117b11bf4e39bda7bd299f8eb",
"assets/assets/Svg/LOGO.svg": "05b819ec91f038765b9f058541a3a334",
"assets/assets/Svg/Vector.svg": "f102460ce796e6958e98909b8cc7905a",
"assets/FontManifest.json": "255590e8c93a31d06755c0e57a735fb3",
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
"assets/fonts/Fontspring-DEMO-juana-black.ttf": "9984766e0e564c17af45ffdb7d3c7d8b",
"assets/fonts/Fontspring-DEMO-juana-blackit.ttf": "6bf1b517cfba01ee916837efe4d09379",
"assets/fonts/Fontspring-DEMO-juana-bold.ttf": "d9febf0bdbb274e7219606a76a0ec6b2",
"assets/fonts/Fontspring-DEMO-juana-boldit.ttf": "20d98c0ed0878bf8a04667ba6b2dc594",
"assets/fonts/Fontspring-DEMO-juana-extralight.ttf": "e08b8bcba76d0d9a0ed06409a5f9dd45",
"assets/fonts/Fontspring-DEMO-juana-extralightit.ttf": "1891a945f296de0db62365528d134c75",
"assets/fonts/Fontspring-DEMO-juana-light.ttf": "79ffc941cb6d13d7237a723a92adaa8a",
"assets/fonts/Fontspring-DEMO-juana-lightit.ttf": "08abcf709e0f65a9256c4b17ff1c6ca1",
"assets/fonts/Fontspring-DEMO-juanaalt-medium.ttf": "eb00c168634df55a201c05c29a30d2b0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e8ab533be7dd463cab4d8273315c0c09",
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
"index.html": "dce529a1b5e3a5a9bc050a62ff583ef4",
"/": "dce529a1b5e3a5a9bc050a62ff583ef4",
"main.dart.js": "27efbbc1ebc2a9d1c0e313d4dec8a73a",
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

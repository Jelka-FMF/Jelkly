const positions: { [index: number]: Position } = {
    0: { x: 7.043007, y: 13.215744, z: 20.535822 },
    1: { x: -9.572852, y: -6.982645, z: 41.830051 },
    2: { x: -7.196544, y: -0.733912, z: 30.714268 },
    3: { x: -17.199832, y: 5.218388, z: 31.026746 },
    4: { x: -29.069207, y: 9.0856, z: 32.365972 },
    5: { x: -34.85944, y: 6.188573, z: 28.63086 },
    6: { x: -41.019297, y: -0.086877, z: 33.821449 },
    7: { x: -36.522678, y: -17.373242, z: 41.27996 },
    8: { x: -37.942339, y: -16.03032, z: 16.285687 },
    9: { x: -30.229745, y: -22.497621, z: 18.809321 },
    10: { x: -37.258072, y: -30.816691, z: 19.613248 },
    11: { x: -26.918086, y: -31.649023, z: 22.321378 },
    12: { x: -26.549959, y: -41.576086, z: 26.913203 },
    13: { x: -25.043894, y: -46.961824, z: 27.410703 },
    14: { x: -22.865551, y: -55.990424, z: 32.380867 },
    15: { x: -20.331274, y: -60.93983, z: 38.244005 },
    16: { x: -11.901508, y: -63.378423, z: 42.500173 },
    17: { x: -2.943525, y: -60.299073, z: 32.678902 },
    18: { x: 3.407205, y: -62.898669, z: 35.892865 },
    19: { x: 15.900222, y: -59.724609, z: 34.749989 },
    20: { x: 17.373741, y: -60.616415, z: 34.910755 },
    21: { x: 23.833195, y: -60.659072, z: 27.18759 },
    22: { x: 35.245538, y: -56.204721, z: 30.491011 },
    23: { x: 30.845982, y: -44.470829, z: 28.285774 },
    24: { x: 32.963376, y: -28.412353, z: 39.107366 },
    25: { x: 46.022495, y: -33.090184, z: 32.071849 },
    26: { x: 41.067013, y: -23.773704, z: 19.464255 },
    27: { x: 46.031457, y: -12.631386, z: 18.482155 },
    28: { x: 45.885562, y: -3.859615, z: 23.869111 },
    29: { x: 57.062158, y: -3.686875, z: 25.446443 },
    30: { x: 48.889265, y: 4.844389, z: 39.158238 },
    31: { x: 51.539342, y: 17.186854, z: 31.198962 },
    32: { x: 42.992295, y: 13.963292, z: 34.598191 },
    33: { x: 45.455839, y: 25.410348, z: 24.86607 },
    34: { x: 38.731364, y: 33.383451, z: 31.845238 },
    35: { x: 29.297253, y: 38.528648, z: 32.000105 },
    36: { x: 30.537491, y: 47.798229, z: 41.020453 },
    37: { x: 22.440079, y: 45.580932, z: 44.642767 },
    38: { x: 16.435691, y: 48.329423, z: 35.025441 },
    39: { x: 7.139025, y: 55.95588, z: 35.357245 },
    40: { x: 0.77001, y: 55.699025, z: 33.285631 },
    41: { x: -0.431432, y: 49.928033, z: 20.535714 },
    42: { x: -8.330473, y: 44.492915, z: 21.904789 },
    43: { x: -16.419071, y: 51.886597, z: 24.85704 },
    44: { x: -21.561461, y: 37.894882, z: 28.705313 },
    45: { x: -31.900952, y: 43.892722, z: 29.464432 },
    46: { x: -36.591775, y: 49.084862, z: 24.553802 },
    47: { x: -33.564462, y: 34.698952, z: 33.321466 },
    48: { x: -41.781795, y: 32.262474, z: 24.071427 },
    49: { x: -41.621606, y: 22.639505, z: 16.651853 },
    50: { x: -52.100958, y: 22.57833, z: 26.750087 },
    51: { x: -49.805539, y: 16.704915, z: 38.839392 },
    52: { x: -50.369814, y: 9.989587, z: 43.239911 },
    53: { x: -48.812173, y: 5.745907, z: 32.79771 },
    54: { x: -36.429831, y: 5.780544, z: 42.678623 },
    55: { x: -41.400107, y: -7.663271, z: 31.464321 },
    56: { x: -33.400297, y: -20.688143, z: 40.743894 },
    57: { x: -38.815715, y: -23.780434, z: 41.505196 },
    58: { x: -35.910002, y: -30.718272, z: 43.928518 },
    59: { x: -33.150331, y: -35.695157, z: 48.95408 },
    60: { x: -29.063748, y: -35.034114, z: 43.341814 },
    61: { x: -22.540282, y: -39.470929, z: 36.714065 },
    62: { x: 4.238142, y: -25.465962, z: 37.142972 },
    63: { x: 1.834007, y: -39.954588, z: 39.732091 },
    64: { x: -0.795837, y: -29.006469, z: 40.357171 },
    65: { x: 2.605543, y: -28.763867, z: 51.294635 },
    66: { x: 9.39966, y: -30.213839, z: 41.339263 },
    67: { x: 14.600165, y: -25.356796, z: 37.455361 },
    68: { x: 27.16709, y: -23.404137, z: 38.071595 },
    69: { x: 34.152063, y: -24.23831, z: 41.9643 },
    70: { x: 33.776888, y: -7.388907, z: 50.982096 },
    71: { x: 47.363302, y: -17.063072, z: 46.116074 },
    72: { x: 50.90363, y: 3.274165, z: 54.923354 },
    73: { x: 42.74276, y: -5.637778, z: 43.958351 },
    74: { x: 40.365019, y: 0.66334, z: 38.809427 },
    75: { x: 37.921962, y: 13.4907, z: 38.622464 },
    76: { x: 38.011397, y: 18.319959, z: 40.821456 },
    77: { x: 31.702404, y: 23.997291, z: 44.821435 },
    78: { x: 26.167907, y: 28.836335, z: 56.726181 },
    79: { x: 24.598714, y: 35.145971, z: 45.714314 },
    80: { x: 23.961157, y: 42.392116, z: 54.970239 },
    81: { x: 15.212177, y: 37.379753, z: 47.892944 },
    82: { x: 5.470204, y: 42.563199, z: 47.991134 },
    83: { x: 1.09047, y: 48.548623, z: 47.249901 },
    84: { x: -6.128167, y: 47.819923, z: 59.226238 },
    85: { x: -20.381497, y: 40.900764, z: 55.267795 },
    86: { x: -12.288243, y: 41.433324, z: 42.857157 },
    87: { x: -15.786558, y: 36.770688, z: 43.17829 },
    88: { x: -19.363491, y: 27.965136, z: 35.428565 },
    89: { x: -24.087056, y: 18.385469, z: 38.112248 },
    90: { x: -28.591962, y: 10.725647, z: 40.863096 },
    91: { x: -29.669329, y: 6.312757, z: 46.142936 },
    92: { x: -29.967508, y: -0.34433, z: 47.113153 },
    93: { x: -36.993852, y: -5.710091, z: 50.000002 },
    94: { x: -31.369192, y: -14.868542, z: 51.785724 },
    95: { x: -37.445134, y: -17.065359, z: 58.428535 },
    96: { x: -37.92309, y: -19.979026, z: 69.178573 },
    97: { x: -25.758008, y: -20.594789, z: 61.428556 },
    98: { x: -20.078012, y: -26.534483, z: 70.178667 },
    99: { x: -13.701415, y: -16.753498, z: 69.776744 },
    100: { x: -0.250631, y: -21.309242, z: 71.488077 },
    101: { x: 2.446138, y: -39.696093, z: 67.812423 },
    102: { x: -3.4421, y: -45.486344, z: 68.214401 },
    103: { x: -2.873725, y: -42.594084, z: 65.803487 },
    104: { x: -6.01149, y: -42.76546, z: 57.219634 },
    105: { x: -7.532037, y: -36.466258, z: 39.732309 },
    106: { x: 3.152103, y: -47.129567, z: 39.404771 },
    107: { x: 11.960515, y: -39.223917, z: 50.446435 },
    108: { x: 18.111847, y: -49.7042, z: 41.107149 },
    109: { x: 21.760523, y: -36.776998, z: 50.513411 },
    110: { x: 29.498818, y: -34.812847, z: 54.434579 },
    111: { x: 29.500232, y: -37.84387, z: 62.261883 },
    112: { x: 37.290914, y: -38.093873, z: 68.035719 },
    113: { x: 38.67368, y: -30.177779, z: 68.154795 },
    114: { x: 39.021628, y: -23.445624, z: 69.151773 },
    115: { x: 46.876788, y: -10.578584, z: 71.913275 },
    116: { x: 50.391263, y: -9.339325, z: 71.178531 },
    117: { x: 48.770378, y: -3.029322, z: 65.089285 },
    118: { x: 44.999558, y: 3.81179, z: 61.919676 },
    119: { x: 40.886459, y: 6.33502, z: 60.982156 },
    120: { x: 37.087498, y: 24.725325, z: 65.48472 },
    121: { x: 37.067294, y: 30.255561, z: 68.214299 },
    122: { x: 33.773585, y: 37.030984, z: 71.571423 },
    123: { x: 27.895691, y: 34.544958, z: 69.617067 },
    124: { x: 22.765566, y: 38.969771, z: 67.499989 },
    125: { x: 10.792742, y: 47.147801, z: 63.184538 },
    126: { x: 8.301137, y: 39.091281, z: 52.619046 },
    127: { x: -2.525192, y: 38.626813, z: 53.03579 },
    128: { x: -5.093329, y: 31.135739, z: 56.3096 },
    129: { x: -11.211883, y: 39.881771, z: 58.973285 },
    130: { x: -26.150249, y: 34.720309, z: 67.261833 },
    131: { x: -28.873144, y: 36.35313, z: 65.178577 },
    132: { x: -35.818462, y: 30.01687, z: 66.25001 },
    133: { x: -37.92156, y: 23.383549, z: 71.696426 },
    134: { x: -36.727721, y: 4.607545, z: 79.523815 },
    135: { x: -45.186217, y: 11.144773, z: 83.892861 },
    136: { x: -43.137063, y: 9.414184, z: 74.392852 },
    137: { x: -38.984982, y: 0.024863, z: 70.892816 },
    138: { x: -42.367136, y: -5.495855, z: 71.214305 },
    139: { x: -27.154123, y: -9.480851, z: 70.892923 },
    140: { x: -33.438432, y: -23.818056, z: 77.202377 },
    141: { x: -24.561693, y: -17.864987, z: 82.544669 },
    142: { x: -20.475037, y: -32.741779, z: 80.856948 },
    143: { x: -17.830188, y: -43.013492, z: 84.15176 },
    144: { x: -4.731844, y: -31.178769, z: 82.6786 },
    145: { x: -0.57035, y: -38.522864, z: 86.964321 },
    146: { x: 3.889181, y: -34.838811, z: 93.678557 },
    147: { x: 14.610149, y: -39.088206, z: 88.080358 },
    148: { x: 16.239764, y: -34.732339, z: 83.45238 },
    149: { x: 23.788084, y: -26.344451, z: 78.4375 },
    150: { x: 32.466345, y: -16.090248, z: 80.595295 },
    151: { x: 33.747643, y: -19.487284, z: 92.648825 },
    152: { x: 40.444847, y: -8.983343, z: 96.674104 },
    153: { x: 40.715296, y: -1.754703, z: 86.045925 },
    154: { x: 39.968795, y: -1.458043, z: 81.275511 },
    155: { x: 38.789467, y: 8.690815, z: 78.006042 },
    156: { x: 35.640022, y: 11.941382, z: 70.285814 },
    157: { x: 28.015033, y: 19.265974, z: 68.596949 },
    158: { x: 33.389859, y: 22.181324, z: 75.071421 },
    159: { x: 21.728, y: 20.54431, z: 73.437528 },
    160: { x: 14.959272, y: 24.762855, z: 71.428545 },
    161: { x: 13.894831, y: 34.195648, z: 78.954079 },
    162: { x: 7.240872, y: 32.55358, z: 83.958333 },
    163: { x: 3.665381, y: 35.509764, z: 90.133903 },
    164: { x: -5.216899, y: 37.72264, z: 91.928573 },
    165: { x: -11.978359, y: 23.296308, z: 91.651775 },
    166: { x: -21.742514, y: 31.376316, z: 88.14287 },
    167: { x: -22.955446, y: 27.519971, z: 96.785712 },
    168: { x: -27.490429, y: 26.802347, z: 94.1071 },
    169: { x: -33.922097, y: 20.215814, z: 88.78564 },
    170: { x: -36.099575, y: 13.184491, z: 87.750027 },
    171: { x: -15.097982, y: 10.642107, z: 87.589291 },
    172: { x: -35.320266, y: -0.13247, z: 85.93747 },
    173: { x: -24.61281, y: -9.640834, z: 90.982145 },
    174: { x: -22.327311, y: -16.018532, z: 92.440521 },
    175: { x: -20.836543, y: -25.457889, z: 91.964453 },
    176: { x: -13.922974, y: -23.507745, z: 94.030539 },
    177: { x: -7.386345, y: -26.11493, z: 86.026747 },
    178: { x: -0.66099, y: -29.503556, z: 87.392862 },
    179: { x: 4.783471, y: -28.881488, z: 93.607152 },
    180: { x: 11.690774, y: -24.66522, z: 99.375071 },
    181: { x: 16.02148, y: -29.951907, z: 103.964334 },
    182: { x: 13.705106, y: -32.244215, z: 114.375018 },
    183: { x: 16.786509, y: -24.973669, z: 117.083347 },
    184: { x: 16.707554, y: -24.832365, z: 108.188816 },
    185: { x: 21.741264, y: -15.786629, z: 101.964246 },
    186: { x: 23.072875, y: -15.654947, z: 101.071423 },
    187: { x: 24.557933, y: -17.003, z: 93.699076 },
    188: { x: 30.494905, y: -9.572831, z: 95.446451 },
    189: { x: 35.842477, y: -0.779256, z: 85.267857 },
    190: { x: 27.932289, y: 7.745438, z: 84.791646 },
    191: { x: 34.202464, y: 13.495531, z: 84.40476 },
    192: { x: 29.867384, y: 22.855, z: 88.494898 },
    193: { x: 22.454654, y: 19.187974, z: 94.142858 },
    194: { x: 21.003216, y: 32.571306, z: 92.040804 },
    195: { x: 13.931074, y: 33.692962, z: 98.749981 },
    196: { x: 7.453719, y: 33.497422, z: 98.035733 },
    197: { x: -0.921747, y: 37.940261, z: 101.107205 },
    198: { x: -13.706089, y: 31.542731, z: 105.178482 },
    199: { x: -9.560518, y: 37.437522, z: 109.06251 },
    200: { x: -16.642177, y: 22.725445, z: 99.607195 },
    201: { x: -25.106322, y: 14.916851, z: 99.642848 },
    202: { x: -16.7544, y: 5.94604, z: 96.678568 },
    203: { x: -25.594532, y: 1.090519, z: 98.452383 },
    204: { x: -25.407112, y: -4.405582, z: 103.07145 },
    205: { x: -31.147569, y: -2.515242, z: 114.345236 },
    206: { x: -29.654648, y: -10.742706, z: 106.428654 },
    207: { x: -24.669771, y: -17.687989, z: 101.934591 },
    208: { x: -20.406299, y: -22.437155, z: 107.52976 },
    209: { x: -11.933761, y: -18.583683, z: 114.776924 },
    210: { x: -14.208428, y: -24.95979, z: 111.815396 },
    211: { x: -2.076728, y: -26.03456, z: 114.910613 },
    212: { x: 3.749283, y: -18.611906, z: 113.124999 },
    213: { x: 14.881676, y: -26.967938, z: 117.857107 },
    214: { x: 14.181495, y: -21.464222, z: 108.883936 },
    215: { x: 19.212571, y: -14.362054, z: 106.035754 },
    216: { x: 26.853407, y: -8.392578, z: 111.07144 },
    217: { x: 14.879249, y: -5.231056, z: 114.017863 },
    218: { x: 28.064554, y: 3.721653, z: 114.142854 },
    219: { x: 23.416557, y: 15.28239, z: 106.999996 },
    220: { x: 17.816889, y: 19.139332, z: 111.392793 },
    221: { x: 14.408133, y: 28.243449, z: 115.118971 },
    222: { x: 13.751406, y: 34.255998, z: 113.775509 },
    223: { x: 8.164485, y: 22.518815, z: 115.867346 },
    224: { x: 1.974656, y: 35.466714, z: 119.196503 },
    225: { x: -6.383372, y: 24.521923, z: 119.24106 },
    226: { x: -14.7509, y: 31.184887, z: 121.096902 },
    227: { x: -15.517623, y: 21.824846, z: 129.702324 },
    228: { x: -20.047845, y: 18.58662, z: 125.571377 },
    229: { x: -31.582856, y: 15.632953, z: 121.755794 },
    230: { x: -34.713342, y: 9.015558, z: 120.178562 },
    231: { x: -28.145573, y: 5.142213, z: 116.87493 },
    232: { x: -32.525378, y: -6.446248, z: 118.928404 },
    233: { x: -29.904294, y: -10.980878, z: 128.061218 },
    234: { x: -21.860121, y: -11.930773, z: 118.482151 },
    235: { x: -16.240331, y: -18.868365, z: 119.94047 },
    236: { x: -8.005707, y: -20.691137, z: 121.398787 },
    237: { x: 2.026712, y: -23.235536, z: 125.312462 },
    238: { x: 6.551862, y: -23.971779, z: 131.249978 },
    239: { x: 13.116468, y: -29.489924, z: 138.571451 },
    240: { x: 16.573768, y: -20.462754, z: 133.392875 },
    241: { x: 30.069289, y: -18.407168, z: 134.64283 },
    242: { x: 25.781205, y: -8.778292, z: 124.336704 },
    243: { x: 30.649546, y: 0.062921, z: 115.204165 },
    244: { x: 36.238989, y: 0.564632, z: 124.315439 },
    245: { x: 28.257195, y: 12.358857, z: 123.035714 },
    246: { x: 33.291569, y: 16.323274, z: 128.958331 },
    247: { x: 22.789258, y: 22.350833, z: 127.187478 },
    248: { x: 23.351525, y: 34.345384, z: 131.03577 },
    249: { x: 16.682957, y: 27.638962, z: 124.940462 },
    250: { x: 7.137845, y: 33.872342, z: 128.607151 },
    251: { x: 0.012804, y: 34.274238, z: 132.214303 },
    252: { x: -5.47213, y: 30.561655, z: 138.958225 },
    253: { x: -12.376179, y: 24.159675, z: 129.761893 },
    254: { x: -19.330295, y: 21.585965, z: 131.75002 },
    255: { x: -22.626881, y: 12.463303, z: 130.803596 },
    256: { x: -30.158409, y: 13.612854, z: 138.125084 },
    257: { x: -24.888615, y: 2.212035, z: 130.285663 },
    258: { x: -22.487716, y: -7.966387, z: 128.857103 },
    259: { x: -19.379805, y: -14.28199, z: 129.749947 },
    260: { x: -15.018968, y: -20.309065, z: 139.78565 },
    261: { x: -9.643975, y: -20.636567, z: 128.988052 },
    262: { x: 1.540777, y: -18.886818, z: 132.928497 },
    263: { x: 3.955138, y: -21.382446, z: 134.404845 },
    264: { x: 13.067571, y: -10.052236, z: 140.535798 },
    265: { x: 18.442473, y: -9.782969, z: 142.347035 },
    266: { x: 21.721086, y: -4.909808, z: 145.678577 },
    267: { x: 14.733393, y: -3.395765, z: 137.857127 },
    268: { x: 27.466549, y: 11.152227, z: 135.491114 },
    269: { x: 9.250382, y: -0.809304, z: 133.392891 },
    270: { x: 14.342337, y: 20.69244, z: 142.372456 },
    271: { x: 0.465292, y: 23.578572, z: 140.68451 },
    272: { x: 4.384776, y: 20.615297, z: 138.785697 },
    273: { x: 0.442493, y: 12.828913, z: 135.089283 },
    274: { x: -4.524896, y: 0.269157, z: 133.452396 },
    275: { x: -14.704314, y: 10.604365, z: 139.434444 },
    276: { x: -11.845179, y: -0.746436, z: 141.763387 },
    277: { x: -17.873816, y: -3.349384, z: 139.642992 },
    278: { x: -6.333109, y: -4.91741, z: 149.57151 },
    279: { x: -5.013277, y: -13.767735, z: 139.97769 },
    280: { x: 2.901386, y: -12.635156, z: 139.613041 },
    281: { x: 8.5904, y: -8.995341, z: 142.678578 },
    282: { x: 11.363482, y: -2.721996, z: 146.607061 },
    283: { x: 14.660524, y: -3.919043, z: 157.767788 },
    284: { x: 22.325451, y: 0.602376, z: 147.589442 },
    285: { x: 29.76241, y: 0.693397, z: 148.57122 },
    286: { x: 25.013741, y: 11.938586, z: 146.096717 },
    287: { x: 12.552385, y: 9.993266, z: 151.857108 },
    288: { x: 3.651697, y: 14.138102, z: 144.642707 },
    289: { x: 4.494609, y: 17.626648, z: 153.988008 },
    290: { x: -0.886493, y: 7.728455, z: 149.062538 },
    291: { x: 4.026295, y: 1.078059, z: 151.919665 },
    292: { x: -10.45216, y: -4.753315, z: 152.440523 },
    293: { x: -13.217006, y: -12.890373, z: 156.69655 },
    294: { x: -3.774171, y: -24.739857, z: 154.464045 },
    295: { x: 4.764903, y: -17.8604, z: 158.821465 },
    296: { x: 5.288453, y: -11.221706, z: 155.044699 },
    297: { x: 8.937352, y: 3.378618, z: 154.702551 },
    298: { x: 13.299601, y: 4.157852, z: 150.929041 },
    299: { x: 11.666599, y: 11.437724, z: 168.809505 },
    300: { x: -2.94674, y: 18.113657, z: 170.821435 },
    301: { x: 9.417646, y: 17.459865, z: 163.125045 },
    302: { x: -10.643524, y: 1.299385, z: 161.928519 },
    303: { x: -6.062507, y: -6.728173, z: 160.357098 },
    304: { x: 0.250509, y: -10.899325, z: 163.321393 },
    305: { x: 8.391636, y: -10.481987, z: 160.428567 },
    306: { x: 15.305322, y: -9.303392, z: 163.285693 },
    307: { x: 20.612036, y: -1.567657, z: 162.74999 },
    308: { x: 21.588515, y: 8.731673, z: 168.035709 },
    309: { x: 20.956962, y: 20.240669, z: 168.214342 },
    310: { x: 10.918662, y: 12.00641, z: 173.169561 },
    311: { x: 2.289078, y: 6.621934, z: 168.714305 },
    312: { x: -2.04403, y: 6.769706, z: 174.880926 },
    313: { x: -2.443545, y: 8.481242, z: 173.000086 },
    314: { x: -4.608443, y: -1.453035, z: 166.071435 },
    315: { x: 4.265428, y: -2.632177, z: 168.071434 },
    316: { x: 13.139298, y: -3.811319, z: 170.071433 },
    317: { x: 20.004241, y: 1.68379, z: 179.642778 },
    318: { x: 6.564259, y: 11.502174, z: 178.46423 },
    319: { x: 2.875121, y: 12.903692, z: 182.704062 },
    320: { x: -4.301883, y: 8.301598, z: 181.249921 },
    321: { x: -3.320508, y: -3.864412, z: 182.142802 },
    322: { x: -2.925236, y: -8.810166, z: 175.625056 },
    323: { x: 7.516262, y: -11.697924, z: 179.693896 },
    324: { x: 15.309654, y: -2.21042, z: 180.821427 },
    325: { x: 13.81228, y: 1.956376, z: 179.540721 },
    326: { x: 5.566756, y: 5.972116, z: 191.000018 },
    327: { x: -2.051882, y: 7.566125, z: 186.607163 },
    328: { x: 0.417992, y: -11.736616, z: 175.922254 },
    329: { x: 9.517669, y: -5.5814, z: 181.96427 },
    330: { x: 4.873312, y: -5.39051, z: 188.285691 },
    331: { x: 6.256651, y: 6.556787, z: 190.999991 },
    332: { x: 3.460552, y: 8.178388, z: 197.075825 },
    333: { x: 8.71924, y: 9.758249, z: 187.066308 },
    334: { x: 5.978786, y: 14.587959, z: 180.089247 },
    335: { x: 12.823456, y: 18.778809, z: 178.095195 },
    336: { x: 1.707828, y: 20.444428, z: 167.270707 },
    337: { x: -4.920407, y: 15.27317, z: 174.14296 },
    338: { x: -4.080333, y: 10.678666, z: 164.508934 },
    339: { x: -4.629205, y: -2.890325, z: 165.833286 },
    340: { x: -10.706768, y: -4.974161, z: 162.73815 },
    341: { x: -8.872496, y: -9.097679, z: 172.946419 },
    342: { x: -0.219055, y: -8.195958, z: 165.476185 },
    343: { x: 4.767287, y: -13.735398, z: 158.178562 },
    344: { x: 11.618671, y: -8.521811, z: 152.633891 },
    345: { x: 16.413648, y: -10.940322, z: 149.178531 },
    346: { x: 22.897061, y: -6.147039, z: 152.45542 },
    347: { x: 27.198842, y: -4.935941, z: 159.642827 },
    348: { x: 27.615961, y: 1.498083, z: 158.239844 },
    349: { x: 34.121084, y: 4.562032, z: 145.491116 },
    350: { x: 26.752559, y: 4.081028, z: 146.785606 },
    351: { x: 22.676819, y: 9.53599, z: 143.452493 },
    352: { x: 16.167954, y: 19.7541, z: 142.20238 },
    353: { x: 9.562451, y: 16.203843, z: 146.636952 },
    354: { x: 4.132217, y: 22.952909, z: 147.797646 },
    355: { x: -5.745642, y: 21.605485, z: 152.964396 },
    356: { x: -6.384703, y: 15.431116, z: 156.547667 },
    357: { x: -11.869934, y: 19.352211, z: 167.559518 },
    358: { x: -9.294988, y: 11.565656, z: 160.918337 },
    359: { x: -16.146286, y: 6.913086, z: 154.17857 },
    360: { x: -14.66409, y: 2.784509, z: 149.732077 },
    361: { x: -19.38342, y: -4.056212, z: 145.565445 },
    362: { x: -17.032836, y: -7.850837, z: 141.83038 },
    363: { x: -13.09333, y: -19.3879, z: 138.422617 },
    364: { x: -8.67323, y: -14.903044, z: 131.500008 },
    365: { x: -2.577272, y: -18.08179, z: 127.500014 },
    366: { x: 1.832764, y: -25.178205, z: 121.642854 },
    367: { x: 11.37125, y: -24.428465, z: 117.797644 },
    368: { x: 14.863585, y: -16.043992, z: 114.107139 },
    369: { x: 23.578926, y: -3.363116, z: 116.454141 },
    370: { x: 29.303001, y: -15.238866, z: 124.464327 },
    371: { x: 30.687797, y: -7.810028, z: 128.392818 },
    372: { x: 32.124982, y: -7.093885, z: 135.178531 },
    373: { x: 29.134189, y: 1.514452, z: 130.57146 },
    374: { x: 30.407045, y: 11.442071, z: 129.535708 },
    375: { x: 16.912013, y: 18.690494, z: 131.458983 },
    376: { x: 26.168248, y: 23.83872, z: 133.095238 },
    377: { x: 18.068993, y: 27.488485, z: 125.535715 },
    378: { x: 15.437971, y: 30.284684, z: 119.566223 },
    379: { x: 9.42211, y: 33.342128, z: 112.7143 },
    380: { x: -1.056535, y: 31.820201, z: 111.205357 },
    381: { x: -13.180401, y: 36.733786, z: 110.249906 },
    382: { x: -10.451842, y: 26.863714, z: 114.796093 },
    383: { x: -14.617677, y: 29.017825, z: 120.833089 },
    384: { x: -19.608692, y: 20.512784, z: 106.755943 },
    385: { x: -24.968382, y: 13.262204, z: 107.380988 },
    386: { x: -30.141268, y: 6.31296, z: 112.083308 },
    387: { x: -30.056435, y: 5.161571, z: 113.39284 },
    388: { x: -28.283208, y: -2.166412, z: 106.964214 },
    389: { x: -24.89983, y: -8.23098, z: 102.113079 },
    390: { x: -15.410291, y: -10.297872, z: 99.880912 },
    391: { x: -12.009801, y: -17.888447, z: 99.107086 },
    392: { x: -2.609581, y: -21.835724, z: 101.309436 },
    393: { x: 5.097717, y: -24.124499, z: 105.982182 },
    394: { x: 10.00856, y: -24.29832, z: 107.142812 },
    395: { x: 15.449119, y: -28.821204, z: 104.974493 },
    396: { x: 11.869917, y: -27.118094, z: 94.166673 },
    397: { x: 19.241229, y: -16.986396, z: 90.580395 },
    398: { x: 17.517206, y: -7.229409, z: 90.642856 },
    399: { x: 25.424446, y: -2.055333, z: 91.636818 },
    400: { x: 12.838092, y: 26.04974, z: 99.062516 },
    401: { x: 9.088938, y: 31.032742, z: 99.702395 },
    402: { x: 6.876557, y: 33.682834, z: 96.004468 },
    403: { x: 0.688475, y: 38.733803, z: 90.714281 },
    404: { x: -6.908118, y: 44.182392, z: 87.928672 },
    405: { x: -8.626223, y: 47.860496, z: 91.428571 },
    406: { x: -16.47091, y: 45.934623, z: 87.261736 },
    407: { x: -18.979603, y: 36.139216, z: 81.683672 },
    408: { x: -27.119008, y: 34.991192, z: 79.071424 },
    409: { x: -30.560712, y: 26.722763, z: 79.2144 },
    410: { x: -35.194801, y: 19.71838, z: 82.589302 },
    411: { x: -40.251746, y: 13.324744, z: 86.190496 },
    412: { x: -45.993253, y: 10.202287, z: 95.408171 },
    413: { x: -43.504697, y: 4.230925, z: 85.280609 },
    414: { x: -44.270052, y: -1.74437, z: 84.375004 },
    415: { x: -34.609226, y: -7.380298, z: 85.833456 },
    416: { x: -30.229013, y: -17.812042, z: 86.836501 },
    417: { x: -31.508308, y: -20.874399, z: 89.107161 },
    418: { x: -34.50035, y: -30.974045, z: 94.392856 },
    419: { x: -26.521579, y: -27.664618, z: 93.839306 },
    420: { x: -23.691303, y: -31.051169, z: 87.392882 },
    421: { x: -13.11781, y: -35.808217, z: 83.809486 },
    422: { x: -12.08091, y: -29.887931, z: 78.720252 },
    423: { x: -1.386037, y: -36.353129, z: 72.821424 },
    424: { x: 1.916997, y: -42.695095, z: 72.351193 },
    425: { x: 10.758625, y: -38.418188, z: 71.749996 },
    426: { x: 11.828103, y: -52.971587, z: 79.315474 },
    427: { x: 11.746662, y: -40.536059, z: 79.642863 },
    428: { x: 29.013688, y: -40.24141, z: 71.026796 },
    429: { x: 23.51065, y: -30.510086, z: 72.821426 },
    430: { x: 31.901355, y: -30.59333, z: 76.562453 },
    431: { x: 27.848202, y: -16.321343, z: 83.549095 },
    432: { x: 27.5623, y: -15.443301, z: 92.916667 },
    433: { x: 36.831998, y: -10.595202, z: 93.571424 },
    434: { x: 36.780063, y: -4.945664, z: 97.73808 },
    435: { x: 38.94927, y: -1.816087, z: 102.589261 },
    436: { x: 27.326492, y: 3.971503, z: 103.080396 },
    437: { x: 31.744171, y: 13.54131, z: 98.571344 },
    438: { x: 29.128385, y: 18.934945, z: 96.862318 },
    439: { x: 16.689302, y: 22.637392, z: 101.352033 },
    440: { x: 20.934378, y: 29.572806, z: 105.586732 },
    441: { x: 22.826723, y: 32.683845, z: 115.833303 },
    442: { x: 22.502446, y: 36.330296, z: 111.25 },
    443: { x: 21.163015, y: 34.520411, z: 100.297615 },
    444: { x: 19.448714, y: 32.775198, z: 94.693813 },
    445: { x: 12.767582, y: 33.970623, z: 88.903037 },
    446: { x: 14.912124, y: 37.865837, z: 83.013424 },
    447: { x: 8.822822, y: 39.771375, z: 75.035731 },
    448: { x: -0.152272, y: 43.914943, z: 74.732119 },
    449: { x: -3.648146, y: 53.038172, z: 77.821428 },
    450: { x: -8.408414, y: 43.497621, z: 75.107119 },
    451: { x: -11.944678, y: 48.274207, z: 67.619048 },
    452: { x: -16.087852, y: 42.849997, z: 61.479641 },
    453: { x: -22.237202, y: 42.052012, z: 56.562516 },
    454: { x: -29.589363, y: 46.430678, z: 53.526725 },
    455: { x: -33.00439, y: 41.382747, z: 58.601213 },
    456: { x: -37.77088, y: 44.806086, z: 65.071481 },
    457: { x: -37.041526, y: 35.097335, z: 73.622444 },
    458: { x: -40.026521, y: 35.478325, z: 61.369132 },
    459: { x: -36.15286, y: 26.205112, z: 59.285802 },
    460: { x: -42.186681, y: 24.639999, z: 50.386866 },
    461: { x: -47.288985, y: 17.444991, z: 46.714273 },
    462: { x: -50.1972, y: 5.986223, z: 50.928715 },
    463: { x: -42.620416, y: 1.187188, z: 49.464392 },
    464: { x: -46.362262, y: -0.118122, z: 46.36903 },
    465: { x: -44.729008, y: -12.160835, z: 46.071423 },
    466: { x: -35.699093, y: -16.526054, z: 48.660682 },
    467: { x: -34.263116, y: -24.470454, z: 51.755941 },
    468: { x: -30.457416, y: -23.303495, z: 60.107163 },
    469: { x: -31.930382, y: -32.93949, z: 60.208349 },
    470: { x: -25.934709, y: -35.878671, z: 62.035679 },
    471: { x: -20.224948, y: -34.429011, z: 63.750055 },
    472: { x: -17.291554, y: -45.411512, z: 68.9881 },
    473: { x: -9.783482, y: -41.748713, z: 65.714355 },
    474: { x: -6.888299, y: -45.319384, z: 63.504373 },
    475: { x: -0.042491, y: -41.457243, z: 59.196744 },
    476: { x: 7.922277, y: -39.151774, z: 54.64272 },
    477: { x: 16.155921, y: -42.491213, z: 63.46949 },
    478: { x: 16.965493, y: -37.42058, z: 49.932962 },
    479: { x: 19.991394, y: -33.25636, z: 46.458517 },
    480: { x: 26.928339, y: -28.500344, z: 43.107111 },
    481: { x: 28.249971, y: -28.111633, z: 45.964319 },
    482: { x: 33.93542, y: -19.331394, z: 52.9241 },
    483: { x: 28.118054, y: -11.025003, z: 61.096944 },
    484: { x: 34.699478, y: -7.937492, z: 63.290802 },
    485: { x: 39.161254, y: -9.886756, z: 70.758853 },
    486: { x: 37.644386, y: -5.369477, z: 70.821417 },
    487: { x: 38.814667, y: -7.8993, z: 64.693797 },
    488: { x: 33.900118, y: -5.340965, z: 57.529766 },
    489: { x: 39.135106, y: -8.109521, z: 50.499993 },
    490: { x: 43.098726, y: 1.570711, z: 45.607181 },
    491: { x: 40.409051, y: 9.006343, z: 40.607136 },
    492: { x: 39.699808, y: 10.789227, z: 37.202534 },
    493: { x: 46.17805, y: 21.447048, z: 38.080477 },
    494: { x: 43.674287, y: 26.159011, z: 28.705385 },
    495: { x: 38.055043, y: 34.426132, z: 38.839511 },
    496: { x: 34.94475, y: 41.684521, z: 43.526726 },
    497: { x: 39.585698, y: 42.928672, z: 43.954063 },
    498: { x: 36.28722, y: 48.939893, z: 52.648809 },
    499: { x: 31.150028, y: 41.015108, z: 49.047619 },
}

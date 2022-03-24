namespace ReactTest_api
{
    public interface IOhmValueCalculator
    {
        public string bandAColor { get; set; }
        public string bandBColor { get; set; }
        public string bandCColor { get; set; }
        public string bandDColor { get; set; }
        public Dictionary<string, double> CalculateOhmValue();
    }

    public class OhmValueCalculator : IOhmValueCalculator
    {
        public OhmValueCalculator(string bandA, string bandB, string bandC, string bandD)
        {
            bandAColor = bandA;
            bandBColor = bandB;
            bandCColor = bandC;
            bandDColor = bandD;

            colorBandKey = new Dictionary<string, double>(){
                { "none_a",   0  }, {"none_b",   0 }, {"none_c",   0          }, {"none_d",   20  },
                { "pink_a",   0  }, {"pink_b",   0 }, {"pink_c",   0.001      }, {"pink_d",   0   },
                { "silver_a", 0  }, {"silver_b", 0 }, {"silver_c", 0.01       }, {"silver_d", 10  },
                { "gold_a",   0  }, {"gold_b",   0 }, {"gold_c",   0.1        }, {"gold_d",   5   },
                { "black_a",  0  }, {"black_b",  0 }, {"black_c",  1          }, {"black_d",  0   },
                { "brown_a",  10 }, {"brown_b",  1 }, {"brown_c",  10         }, {"brown_d",  1   },
                { "red_a",    20 }, {"red_b",    2 }, {"red_c",    100        }, {"red_d",    2   },
                { "orange_a", 30 }, {"orange_b", 3 }, {"orange_c", 1000       }, {"orange_d",0.05 },
                { "yellow_a", 40 }, {"yellow_b", 4 }, {"yellow_c", 10000      }, {"yellow_d",0.02 },
                { "green_a",  50 }, {"green_b",  5 }, {"green_c",  100000     }, {"green_d",0.5   },
                { "blue_a",   60 }, {"blue_b",   6 }, {"blue_c",   1000000    }, {"blue_d",0.25   },
                { "violet_a", 70 }, {"violet_b", 7 }, {"violet_c", 10000000   }, {"violet_d",0.1  },
                { "grey_a",   80 }, {"grey_b",   8 }, {"grey_c",   100000000  }, {"grey_d",0.01   },
                { "white_a",  90 }, {"white_b",  9 }, {"white_c",  1000000000 }, {"white_d",0     }
            };
        }

        private static Dictionary<string, double> colorBandKey { get; set; }


        public string bandAColor { get; set; }
        public string bandBColor { get; set; }
        public string bandCColor { get; set; }
        public string bandDColor { get; set; }

        public Dictionary<string,double> CalculateOhmValue(/*string bandAColor, string bandBColor, string bandCColor, string bandDColor*/)
        {
            double resistance;
            double sigFig1 = colorBandKey[this.bandAColor];
            double sigFig2 = colorBandKey[this.bandBColor];
            double multiplier = colorBandKey[this.bandCColor];
            double tolerance = colorBandKey[this.bandDColor];

            resistance = (sigFig1 + sigFig2) * multiplier;

            return new Dictionary<string, double>() { { "ohms", resistance }, { "tolerance", tolerance } };
        }
    }

}

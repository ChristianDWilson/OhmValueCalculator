namespace OhmValueCalculator_API
{
    public interface IOhmValueCalculator
    {
        public string bandAColor { get; set; }
        public string bandBColor { get; set; }
        public string bandCColor { get; set; }
        public string bandDColor { get; set; }
        public Dictionary<string, string> CalculateOhmValue();
    }

    public class OhmValueCalculator : IOhmValueCalculator
    {
        public OhmValueCalculator(string bandA, string bandB, string bandC, string bandD)
        {
            bandAColor = bandA;
            bandBColor = bandB;
            bandCColor = bandC;
            bandDColor = bandD;
            colorBandKey = new Dictionary<string, int>
            {
                { "pink",   -3 },
                { "silver", -2 },
                { "gold",   -1 },
                { "black",   0 },
                { "brown",   1 },
                { "red",     2 },
                { "orange",  3 },
                { "yellow",  4 },
                { "green",   5 },
                { "blue",    6 },
                { "violet",  7 },
                { "grey",    8 },
                { "white",   9 },
            };
            toleranceKey = new Dictionary<string, double>
            {
                {"none",   20   },
                {"silver", 10   },
                {"gold",   5    },
                {"brown",  1    },
                {"red",    2    },
                {"orange", 0.05 },
                {"yellow", 0.02 },
                {"green",  0.5  },
                {"blue",   0.25 },
                {"violet", 0.1  },
                {"grey",   0.01 },
                {"white",  0    }
            };
        }

        //private static Dictionary<string, double> colorBandKey { get; set; }
        private static Dictionary<string, int> colorBandKey { get; set; }
        private static Dictionary<string, double> toleranceKey { get; set; }




        public string bandAColor { get; set; }
        public string bandBColor { get; set; }
        public string bandCColor { get; set; }
        public string bandDColor { get; set; }

        public Dictionary<string, string> CalculateOhmValue()
        {
            double resistance;
            int sigFig1;
            int sigFig2;
            double multiplier;
            double tolerance;

            if (colorBandKey.ContainsKey(this.bandAColor) && colorBandKey.ContainsKey(this.bandBColor) && colorBandKey.ContainsKey(this.bandCColor))
            {
                if(colorBandKey[this.bandAColor] >= 0 && colorBandKey[this.bandBColor] >= 0 )
                {
                    sigFig1 = colorBandKey[this.bandAColor] * 10;
                    sigFig2 = colorBandKey[this.bandBColor];
                    multiplier = Math.Pow(10,colorBandKey[this.bandCColor]);
                }
                else
                {
                    return new Dictionary<string, string>() { { "Error", "Invalid color band configuration" } };

                }

            }
            else
            {
                return new Dictionary<string, string>() { { "Error", "Invalid color band configuration" } };
            }

            if (toleranceKey.ContainsKey(this.bandDColor))
            {
                tolerance = toleranceKey[this.bandDColor];
            }
            else
            {
                return new Dictionary<string, string>() { { "Error", "Invalid color band configuration" } };
            }
            resistance = (sigFig1 + sigFig2) * multiplier;
            return new Dictionary<string, string>() { { "ohms", resistance.ToString() }, { "tolerance", tolerance.ToString() } };
        }
    }

}

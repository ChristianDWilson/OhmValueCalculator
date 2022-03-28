using OhmValueCalculator_API;
using Xunit;

namespace OhmValueCalculator_test
{
    public class CalculateOhmValueTest
    {
        [Fact]
        public void CalculateOhmValue_ExpectedPath_ValidInput()
        {
            var testObject = new OhmValueCalculator("brown","yellow","orange","yellow");

            var result = testObject.CalculateOhmValue();

            Assert.Equal("14000",result["ohms"]);
            Assert.Equal("0.02", result["tolerance"]);
        }

        [Fact]
        public void CalculateOhmValue_UnexpectedPath_InvalidInput()
        {
            var testObject = new OhmValueCalculator("none", "yellow", "orange", "yellow");

            var result = testObject.CalculateOhmValue();

            Assert.True(result.ContainsKey("Error"));
        }
    }
}
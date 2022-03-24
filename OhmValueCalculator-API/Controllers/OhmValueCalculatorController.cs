using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ReactTest_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OhmValueCalculatorController : ControllerBase
    {
        [HttpPost(Name = "GetOhmValue")]
        public Dictionary<string, double> Post([FromBody]Dictionary<string,string> requestBody)
        {
            
            OhmValueCalculator calc = new OhmValueCalculator(requestBody["BandA"], 
                                                            requestBody["BandB"], 
                                                            requestBody["BandC"], 
                                                            requestBody["BandD"]);

            return calc.CalculateOhmValue();
        }


    }
}

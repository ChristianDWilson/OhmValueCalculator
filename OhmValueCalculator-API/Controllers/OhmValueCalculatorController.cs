using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace OhmValueCalculator_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OhmValueCalculatorController : ControllerBase
    {
        [HttpPost(Name = "GetOhmValue")]
        public IActionResult Post([FromBody]Dictionary<string,string> requestBody)
        {
            
            OhmValueCalculator calc = new OhmValueCalculator(requestBody["BandA"], 
                                                            requestBody["BandB"], 
                                                            requestBody["BandC"], 
                                                            requestBody["BandD"]);
            var RetVal = calc.CalculateOhmValue();
            if(RetVal.ContainsKey("Error"))
            {
                return BadRequest(RetVal);
            }

            return Ok(RetVal);
        }


    }
}

using Microsoft.AspNetCore.Mvc;
using Villainary_api.Data;
using Villainary_api.Models;

namespace Villainary_api.Controllers{
    
    [Route("api/[controller]")]
    [ApiController]
    public class VillainaryProductsController: ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Produces("application/json")] 
        public ActionResult<IEnumerable<ProductDto>> GetProducts()
        {
            Console.WriteLine("GetProducts action called");
            return Ok(ProductStore.products);
        }
    }
}
namespace Villainary_api.Models;

public class ProductDto
{
    public int Id {get; set;}
    public string? Name {get; set;}
    public string? Description {get; set;}
    public string? ImageUrl {get; set;}
    public double? Discount {get; set;}
    public string? Title {get; set;}
    public double? Price {get; set;}
    public DateTime CreatedAt {get; set;}
}

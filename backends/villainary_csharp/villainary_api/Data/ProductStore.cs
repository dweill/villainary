using Villainary_api.Models;

namespace Villainary_api.Data;

public static class ProductStore
{
    public static List<ProductDto> products = new List<ProductDto>
    {
        new ProductDto()
        {
            Id = 1, Name="Laser Shark", 
            Description="Sharks with freaking lasers on their heads!", 
            Discount=0.00, 
            ImageUrl="", 
            Price=1499.99, 
            Title="Laser Shark", 
            CreatedAt=new DateTime()
        },
        new ProductDto()
        {
            Id = 2,
            Name = "Death Ray Gun",
            Description = "Ultimate weapon for world domination.",
            Discount = 0.10,
            ImageUrl = "",
            Price = 1999.99,
            Title = "Death Ray Gun",
            CreatedAt = new DateTime()
        },
        new ProductDto()
        {
            Id = 3,
            Name = "Mind Control Serum",
            Description = "Bend others to your will with this powerful serum.",
            Discount = 0.15,
            ImageUrl = "mind-control-serum.jpg",
            Price = 149.99,
            Title = "Mind Control Serum",
            CreatedAt = new DateTime()
        },
        new ProductDto()
        {
            Id = 4,
            Name = "Invisibility Cloak",
            Description = "Disappear at will with this advanced cloak technology.",
            Discount = 0.05,
            ImageUrl = "invisibility-cloak.jpg",
            Price = 799.99,
            Title = "Invisibility Cloak",
            CreatedAt = new DateTime()
        },
        new ProductDto()
        {
            Id = 5,
            Name = "Robot Minions Kit",
            Description = "Build an army of loyal robot minions for your evil plans.",
            Discount = 0.20,
            ImageUrl = "robot-minions-kit.jpg",
            Price = 299.99,
            Title = "Robot Minions Kit",
            CreatedAt = new DateTime()
        },
        new ProductDto()
        {
            Id = 6,
            Name = "Doomsday Device Blueprints",
            Description = "Blueprints for constructing a world-ending doomsday device.",
            Discount = 0.25,
            ImageUrl = "doomsday-device-blueprints.jpg",
            Price = 499.99,
            Title = "Doomsday Device Blueprints",
            CreatedAt = new DateTime()
        }
    };
}
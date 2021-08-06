class Resource {
  constructor(
    name,
    type,
    description,
    color,
    craftable = false,
    ingredients = []
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.color = color;
    this.craftable = craftable;
    if (this.craftable) {
      this.ingredients = ingredients;
    }
  }
}

export default Resource;

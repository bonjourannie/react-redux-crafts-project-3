# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
craft_a = Craft.create(name: "scrapbook", id: 1)
craft_b = Craft.create(name: "collage", id: 2)
craft_c = Craft.create(name: "fabrige egg", id: 3)

material_a = Material.create(craft_id: 1, name: "construction paper")
material_b = Material.create(craft_id: 2, name: "felt")
material_c = Material.create(craft_id: 3, name: "purple dye")
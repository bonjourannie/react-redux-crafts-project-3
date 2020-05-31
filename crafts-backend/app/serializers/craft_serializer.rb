class CraftSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :notes

  has_many :materials
  # has_many :crafts
  has_many :comments
end

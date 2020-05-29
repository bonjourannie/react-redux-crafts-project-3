class CraftSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :notes

  has_many :materials, :craft_logs
end

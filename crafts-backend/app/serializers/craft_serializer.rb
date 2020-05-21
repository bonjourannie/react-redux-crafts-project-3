class CraftSerializer < ActiveModel::Serializer
  attributes :id, :name, :catgory, :notes

  has_many :materials
end

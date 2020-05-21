class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :craft_id
end

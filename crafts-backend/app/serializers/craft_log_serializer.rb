class CraftLogSerializer < ActiveModel::Serializer
    attributes :id, :comment, :craft_id
  end
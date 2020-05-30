class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :craft_id
end

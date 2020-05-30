class Comment < ApplicationRecord
    belongs_to :craft

    validates :name, presence: true
end

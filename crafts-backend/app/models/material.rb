class Material < ApplicationRecord
    belongs_to :craft 

    validates :name, presence: true
end

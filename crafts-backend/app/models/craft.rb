class Craft < ApplicationRecord
    has_many :materials
    has_many :comments

    validates :name, presence: true
    
end
 
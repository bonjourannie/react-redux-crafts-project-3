class Craft < ApplicationRecord
    has_many :materials, :craft_logs
    validates :name, presence: true
    
end
 
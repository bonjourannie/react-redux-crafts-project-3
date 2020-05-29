class AddCraftIdToCraftLog < ActiveRecord::Migration[6.0]
  def change
    add_column :craft_logs, :craft_id, :integer
  end
end

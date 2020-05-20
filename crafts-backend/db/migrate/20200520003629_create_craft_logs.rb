class CreateCraftLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :craft_logs do |t|

      t.timestamps
    end
  end
end

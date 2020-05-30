class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.string :craft_id

      t.timestamps
    end
  end
end

class AddCommentCraftLog < ActiveRecord::Migration[6.0]
  def change
    add_column :craft_logs, :comment, :string
  end
end

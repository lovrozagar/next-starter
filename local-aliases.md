To enable local aliases

1. Add the bellow code to ~/.zshrc:

# Function to handle unknown commands and create directory-specific aliases
command_not_found_handler() {
  # Get the unknown command
  local cmd="$1"

  # Directory-specific alias file
  local alias_file="local-aliases.sh"

  # Load aliases for this directory, if available
  if [[ -f $alias_file ]]; then
    source $alias_file
  fi

  # Check if the command now exists after loading aliases
  if command -v "$cmd" &>/dev/null; then
    "$cmd" "${@:2}"  # Execute the command
    return 0
  fi

  # If still not found, prompt to create a new alias
  echo "Command '$cmd' not found."
  echo -n "Do you want to define an alias for it in this directory? [y/N]: "
  read -r response
  if [[ $response =~ ^[Yy]$ ]]; then
    echo -n "Enter the full command to alias '$cmd': "
    read -r new_command
    echo "alias $cmd='$new_command'" >>"$alias_file"
    echo "Alias saved. Run 'source $alias_file' to load it."
  fi
}

# Automatically source local-aliases.sh if it exists
if [[ -f local-aliases.sh ]]; then
  source local-aliases.sh
fi

2. Run the command to reload zsh configuration:

source ~/.zshrc

3. Run the command to load aliases:

source local-aliases.sh

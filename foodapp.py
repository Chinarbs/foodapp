#i decide to deactivate fo a while since i need to finish first my project
from flask import Flask, render_template

app = Flask(__name__)

#Sample menu data to display in HTML
menu = [
   {"id": 1, "name": "Burger", "price": 99},
   {"id": 2, "name": "Pizza", "price": 199},
   {"id": 3, "name": "Spaghetti","price": 129},
    {"id": 4, "name": "Hotdog", "price": 15},
    {"id": 5, "name": "Lumpia", "price": 20},
   {"id": 6, "name": "Lugaw", "price": 35},
    {"id": 7, "name": "Torta", "price": 50}
]

@app.route("/")
def index():
   return render_template('index.html', menu=menu)

if __name__ == "__main__":
   app.run(debug=True)

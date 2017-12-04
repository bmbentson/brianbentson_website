from flask import Flask
from redis import Redis
from flask import render_template

app = Flask(__name__)
redis = Redis(host='redis', port=6379)

@app.route('/')
def hello():
    count = redis.incr('hits')
    return render_template('index.html', count=count) 

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)

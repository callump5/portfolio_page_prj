from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    me = {
        'name': 'Callum Pullinger',
        'email': 'cpullinger@gmail.com',
        'mobile': '07412090817',
        'github': 'https://github.com/callump5'
    }
    return render_template('index.html', me = me)


if __name__ == '__main__':
    app.run(debug=True)

class Url:
    def __init__(self, url):
        self.url = url

    # checks if URL is valid
    def validate(self):
        # request out to url
        return True

    def get_url(self):
        return "m.co/exmpl"

    def get_or_create_url(self):
        # check if it exists, use get_url
        # if it does, return that
        # otherwise generate a new one, add to db, return that
        return "m.co/exmpl"
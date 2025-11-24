class Honda:
    # First we create a constructor for this class
    # and add members to it, here models
    def __init__(self):
        self.models = ['Activa', 'Shine', 'CBZ', 'Hunk','Unicorn']
 
    # A normal print function
    def outModels(self):
        print('These are the available models for Honda')
        for model in self.models:
            print('\t%s ' % model)


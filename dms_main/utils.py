from datetime import datetime

def date_converter(date):

    year, month, day = date.split('/')

    parsed_date = datetime(int(month), int(day), int(year))
    
    return parsed_date


def format_date(date_unformat):
    year, month, day = date_unformat.split('-')

    parsed_date = datetime(int(year), int(month), int(day))
    
    formatted_date = parsed_date.strftime("%m/%d/%Y")

    return formatted_date
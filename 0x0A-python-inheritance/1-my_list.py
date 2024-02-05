#!/usr/bin/python3
"""define that inherits from list"""


class MyList(list):
    """executes the list, but sorted ascending sort"""

    def print_sorted(self):
        """prints the list, but sorted ascending sort"""
        print(sorted(self))

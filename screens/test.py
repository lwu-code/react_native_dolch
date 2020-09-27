import sys
import os
import glob
import json


def main():

    WordImages_class_name = "WordImages"

    print("This is the name of the script: ", sys.argv[0])

    target_folder = "../assets/word_pictures/"
    directory = os.fsencode(os.path.abspath(target_folder))

    print("now iterate ", target_folder)
    print("directory = ", directory)

    f_output = open(WordImages_class_name + ".js", "w")

    f_output.write("const " + WordImages_class_name + "=\n")
    lst = {}
    for file in os.listdir(target_folder):
        filename = os.fsdecode(file)
        print(filename)

        if filename.lower().endswith(".png") == True:
            image_name = filename.replace(".png", "")
            print(filename)
            print("image_name = ", image_name)

            string = "require(\"" + target_folder + filename + "\")"
            d = {}
            d[image_name] = string

            name = filename.replace(".\\", '')
            name = name.replace(".png", "")

            lst[name] = string

    # for filename in os.listdir(directory):
    #     # we only calculate file, since folder will be recursive

    #     if os.path.isfile(filename):
    #         # only show .png
    #         if filename.lower().endswith(".png") == True:
    #             print(filename)
    #             d = {}
    #             d['src'] = filename

    #             name = filename.replace(".\\", '')
    #             name = name.replace(".png", "")
    #             d['name'] = name
    #             lst.append(d)

    json.dumps(lst)
    print((lst))
    json.dump(lst, f_output)

    f_output.write("\nexport default " + WordImages_class_name + "\n")
    f_output.close()


if __name__ == '__main__':
    main()

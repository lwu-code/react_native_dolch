import sys
import os
import glob
import json
import codecs

# from __future__ import with_statement


def main():

    filepath = '2011freq.json.2'

    num = []
    num_num = 0

    output_json = json.load(open(filepath,  encoding="utf8"))
    for majorkey in output_json:
        # print(majorkey, type(majorkey))
        for key in majorkey:
            value = majorkey[key]
            num.append(value)
            # print("key = ", key, " value = ", value)
            num_num += 1

    print("num = ", num)

    filepath2 = "raw_words.txt"

    words = []
    num_words = 0

    with open(filepath2) as fp:
        line = fp.readline()
        cnt = 1
        while line:
            print("Line {}: {}".format(cnt, line.strip()))
            idx_1 = line.index("\"")
            print("idx_1 = ", idx_1)
            idx_2 = line.index("\"", idx_1+1)
            words.append(line[idx_1+1: idx_2])

            line = fp.readline()
            cnt += 1
            num_words += 1

    print("words = ", words)

    res = []
    for idx in range(min(num_num, num_words)):
        dic = {}
        print("idx = ", idx, num[idx], words[idx])
        dic[words[idx]] = num[idx]
        res.append(dic)

    print("res = ", res)

    # # parse file
    # obj = json.loads(data)
    # print(obj)

    # return
    # for majorkey in output_json:
    #     print(majorkey, type(majorkey))
    # for key in majorkey:
    #     value = majorkey[key]
    #     print("key = ", key, " value = ", value)

    # for key, value in majorkey:
    #     print("key = ", key, " value = ", value)

    # for key, value in data.items():
    #     print(key, value)
    # line = fp.readline()
    # cnt = 1
    # while line:
    #     print("Line {}: {}".format(cnt, line.strip()))
    #     line = fp.readline()
    #     cnt += 1

    # return

    # WordImages_class_name = "WordImages"

    # print("This is the name of the script: ", sys.argv[0])

    # target_folder = "../assets/word_pictures/"
    # directory = os.fsencode(os.path.abspath(target_folder))

    # print("now iterate ", target_folder)
    # print("directory = ", directory)

    # f_output = open(WordImages_class_name + ".js", "w")

    # f_output.write("const " + WordImages_class_name + "=\n")
    # lst = {}
    #    for file in os.listdir(target_folder):
    #         filename = os.fsdecode(file)
    #         print(filename)

    #         if filename.lower().endswith(".png") == True:
    #             image_name = filename.replace(".png", "")
    #             print(filename)
    #             print("image_name = ", image_name)

    #             string = "require(\"" + target_folder + filename + "\")"
    #             d = {}
    #             d[image_name] = string

    #             name = filename.replace(".\\", '')
    #             name = name.replace(".png", "")

    #             lst[name] = string

    #     json.dumps(lst)
    #     print((lst))
    #     json.dump(lst, f_output)

    #     f_output.write("\nexport default " + WordImages_class_name + "\n")
    #     f_output.close()


if __name__ == '__main__':
    main()

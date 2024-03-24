* Change project version in `package.json`

* Commit the project

```bash
git commit -m "v1.0.23"
```

* Create an annotated tag

```bash
git tag -a v1.0.23 -m "v1.0.23"
```

* Push

```bash
git push
```

* Push tag to remote

```bash
git push origin --tags -f
```

* Publish the project

```bash
npm publish
```